let img;
let x, y, w, h;
let growing = true;

function preload() {
  img = loadImage('assets/pallas_cat.jpg');
}

function setup() {
  createCanvas(512, 410);
  // start small, centered
  w = width;
  h = height;
  x = 0;
  y = 0;
}

function draw() {
  background(0);
  image(img, x, y, w, h);
  
  if (growing) {
    grow();
  }
}

function grow() {
  // increase size
  w += 1;
  h += 1;
  // keep image centered
  x = (width - w) / 2;
  y = (height - h) / 2;
  
  // stop growing when it fills canvas
  if (w >= 800 && h >= 820) {
    growing = false;
  }
}
