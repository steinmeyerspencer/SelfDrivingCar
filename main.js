const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width/2, carCanvas.width*.9);

const traffic = [];
const numberOfPairs = 15;  
const laneOptions = [0, 1, 2];  

const N = 100;
const cars = generateCars(N);
let bestCar = cars[0];
if(localStorage.getItem("bestBrain")){
    for(let i = 0; i<cars.length;i++){
        cars[i].brain = JSON.parse(
            localStorage.getItem("bestBrain")
        );
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.1)
            // changes all but 1st car to be 
            // 10% diff than last best car
        }
    }
}

for (let i = 0; i < numberOfPairs; i++) {
    const lane1 = laneOptions[Math.floor(Math.random() * laneOptions.length)];
    const lane2 = laneOptions[Math.floor(Math.random() * laneOptions.length)];
    
    traffic.push(new Car(road.getLaneCenter(lane1), -i * 200, 30, 50, "DUMMY", 2, "white"));
    traffic.push(new Car(road.getLaneCenter(lane2), -i * 200, 30, 50, "DUMMY", 2, "white"));
}

animate();

// saving best car so that program can continue to learn
function save(){
    localStorage.setItem("bestBrain",
        JSON.stringify(bestCar.brain)
    );
}

function discard(){
    localStorage.removeItem("bestBrain")
}

function generateCars(N){
    const cars = [];
    for(let i = 0; i <= N; i++){
        cars.push(new Car(road.getLaneCenter(1),100,30,50,"AI"))
    }
    return cars;
}

function animate(time){
    for(let i = 0; i < traffic.length; i++){
        traffic[i].update(road.borders,[])
    }
    for(let i = 0; i < cars.length; i++){
        cars[i].update(road.borders, traffic);
    }
    bestCar = cars.find(
        c=>c.y == Math.min(
            ...cars.map(c=>c.y)
        ));
        // finds min y value and makes it best car

    carCanvas.height = window.innerHeight;
    networkCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0,-bestCar.y+carCanvas.height*0.7);

    road.draw(carCtx);
    for(let i = 0; i < traffic.length; i++){
        traffic[i].draw(carCtx, "white");
    }
    carCtx.globalAlpha = 0.2;
    // making more transparent
    for(let i = 0; i < cars.length; i++){
        cars[i].draw(carCtx);
    }
    carCtx.globalAlpha = 1;
    bestCar.draw(carCtx, true);

    carCtx.restore();

    networkCtx.lineDashOffset = -time/50;
    Visualizer.drawNetwork(networkCtx,bestCar.brain);
    requestAnimationFrame(animate);
}