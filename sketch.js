
var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'darkred',
    draw: function(){
        fill( this.colour );
        // before "redBrick.colour" java is looking through all 
        // over the document to find the object called redBrick,
        // but now changing to "this.colour" java knows we are
        // only referring to the colour within this group
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        // += is take the value that is one the left
        // and add to what is on the right
        // and assign that to the value you are accessing
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }

        // combine the following two if statement
        // if(redBrick.y > height){
        //     redBrick.ySpeed *= -1
        // }
        // if(redBrick.y < 0){
        //     redBrick.ySpeed *= -1;
        // }
    }
};



var pinkBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 4,
    colour: 'pink',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var whiteBrick = {
    x: 300,
    y: 400,
    w: 20,
    h: 20,
    xSpeed: 3,
    ySpeed: 3,
    colour: 'white',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};


// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and tehn returns

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('grey');
    redBrick.draw();
    redBrick.move();
    pinkBrick.draw();
    pinkBrick.move();
    whiteBrick.draw();
    whiteBrick.move();
}