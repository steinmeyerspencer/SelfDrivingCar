// from sensor draw method
/*
        if (this.readings[i]) {
            const distance = Math.sqrt(
                Math.pow(this.readings[i].x - this.rays[i][0].x, 2) +
                Math.pow(this.readings[i].y - this.rays[i][0].y, 2)
            );
            if (distance <= this.rayLength) {
                end = this.readings[i];
            }
        }
            */

// old sensor draw method

    /*
    draw(ctx){
        for(let i=0; i<this.rayCount;i++){
            let end = this.rays[i][1];
            if(this.readings[i]){
                end = this.readings[i];
            }
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                end.x,
                end.y
            );
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.moveTo(
                this.rays[i][1].x,
                this.rays[i][1].y
            );
            ctx.lineTo(
                end.x,
                end.y
            );
            ctx.stroke();
            
        };
    };
}
*/

// OLD CAR DRAW WITHOUT PNG
/*
        if(this.damaged){
            ctx.fillStyle = "gray";
        }
        else{
            ctx.fillStyle  = color;
        }
            
        ctx.beginPath();
        ctx.moveTo(this.polygon[0].x,this.polygon[0].y);
        for(let i = 1; i < this.polygon.length;i++){
            ctx.lineTo(this.polygon[i].x,this.polygon[i].y)
        }
        ctx.fill();
*/