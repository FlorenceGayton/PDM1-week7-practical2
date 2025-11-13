let Sky;
let Stars;
let blendFactor = 0; // 0 to 1 transparency

function preload() {
    // load images
    Sky = loadImage('assets/blue-sky.jpg');
    Stars = loadImage('assets/night-sky.jpg');
}

function setup() {
    createCanvas(800, 600);
    pixelDensity(1); // set the pixel density to be the same for each image
    image(Sky, 0, 0, width, height);
    image(Stars, 0, 0, width, height);
    //load pixels for each image
    Sky.loadPixels();
    Stars.loadPixels();
}

function draw() {
    loadPixels();
    // fade each pixel
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i]   = Sky.pixels[i]   + (Stars.pixels[i]   - Sky.pixels[i])   * blendFactor;
        pixels[i+1] = Sky.pixels[i+1] + (Stars.pixels[i+1] - Sky.pixels[i+1]) * blendFactor;
        pixels[i+2] = Sky.pixels[i+2] + (Stars.pixels[i+2] - Sky.pixels[i+2]) * blendFactor;
        pixels[i+3] = 255; // full opacity
    }

    updatePixels();
    // blend pixels gradually every frame
    blendFactor += 0.01;
    if (blendFactor > 1){
        blendFactor = 1;
    }
}
