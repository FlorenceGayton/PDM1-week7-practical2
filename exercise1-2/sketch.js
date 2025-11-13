let Sky;

class Plane {
    x;
    y;
    w;
    h;
    speed;
    constructor(x, y, w, h, speed){
        // declare proportion values and speed
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }
    fly() {
        // move across the screen at given value
        this.x += this.speed;
        // reset the x position when reach width of canvas 
        if (this.x > width){
            this.x =- this.w;
        }
        // call plane
        image(plane, this.x, this.y, this.w, this.h)

    }
}

let plane1;
let plane2;

function preload() {
    // load images
    Sky = loadImage('assets/blue-sky.jpg');
    plane = loadImage('assets/plane.png');
}

function setup() {
  createCanvas(800, 600);
  // call plane class for each plane
  plane1 = new Plane(10, 150, 512/2, 341/2, 2);
  plane2 = new Plane(-50, 300, 512/4, 341/4, 1);
}

function draw() {
  background(0);
  // draw sky
  image(Sky, 0, 0, width, height);
  // call each plane to complete fly method in class
  plane1.fly();
  plane2.fly();
}
