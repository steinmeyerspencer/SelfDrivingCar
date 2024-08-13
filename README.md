** I used a tutorial for this project. That tutorial is linked here: [https://www.youtube.com/watch?v=Rs_rAxEsAvI](Self-Driving Car with JavaScript Course – Neural Networks and Machine Learning)

This is my first Github upload, so please email me at spencersteinmeyer@gmail.com if I have uploaded incorrectly.

With help from freecodecamp.org, I made a project with JavaScript that teaches a car to drive itself. 
This project also consists of HTML and CSS files, however the bulk of the functionality is in JavaScript. 
This project uses neural networks and random biases to find the best of some user-defined amount(N) of virtual cars
when it comes to avoiding randomized traffic. The "best" car, as also referred to as the car with the "best brain" is defined
as the car that reaches the furthest in traffic without crashing. The user can then hit the save button,
saving that brain, and then when the program is rerun, the biases of that "best brain" are mutated a user-defined 
amount, and then the N cars in the next simulation have these mutated neural networks.

In practice, say we run a simulation of 100 cars. A large amount of these cars may run backwards into the wall.
Whatever cars don't run straight into a wall have to pass by the first car or set of cars without crashing.
The cars that make it past the first car or set of cars then have to not crash into the next car or set of cars, 
and so on, for an adjustable amount of sets of cars. 

In the first run, it is likely that very few, if any cars, will make it past the first two or three levels.
However, the car that makes it the furthest is saved, and then the brains of the other cars are mutated
versions of this "best car". I chose to randomize the traffic because I believe reacting better to the unknown 
shows a smarter neural network than a car that can get through the same traffic repeatedly.

I first want to repeat that I used a Youtube tutorial from freecodecamp.orgas I do not want to plagiarize, but I 
also want to say how stoked I am to be learning how to use neural networks. The tutorial was extremely
well taught and showed how interesting artificial intelligence can be.
