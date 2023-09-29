let pixels = [];
let colors = ["white", "black", "blue", "green", "red", "grey", "orange"];
let w = colors[0];
let b = colors[1];
let bl = colors[2];
let g = colors[3];
let r = colors[4];
let gr = colors[5];
let o = colors[6];
let available = true;

let pixelArt1 = [
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
  [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
  [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
  [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
  [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
  [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
  [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
  [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b],
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
  [g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g],
  [bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl],
];
let pixelArt2 = [
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
  [b, w, w, g, g, g, g, g, g, g, g, g, g, w, w, b],
  [b, g, g, w, w, w, w, w, w, w, w, w, w, g, g, b],
];
let pixelArt3 = [
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
  [w, w, w, w, w, w, b, b, b, b, w, w, w, w, w, w],
  [w, w, w, w, b, b, r, r, r, r, b, b, w, w, w, w],
  [w, w, w, b, r, r, r, r, r, r, r, r, b, w, w, w],
  [w, w, b, r, r, w, r, r, r, r, r, r, b, b, w, w],
  [w, w, b, r, r, r, w, r, r, r, r, r, r, b, w, w],
  [w, b, r, r, r, r, r, r, r, r, r, r, r, r, b, w],
  [w, b, b, b, r, r, r, r, b, b, b, r, r, r, b, w],
  [w, b, b, b, b, r, r, b, w, w, w, b, r, r, b, w],
  [w, b, gr, w, w, b, b, b, w, w, w, b, b, b, b, w],
  [w, w, b, w, w, w, b, b, w, w, w, b, w, b, w, w],
  [w, w, b, gr, w, w, w, w, b, b, b, w, w, b, w, w],
  [w, w, w, b, gr, w, w, w, w, w, w, w, b, w, w, w],
  [w, w, w, w, b, b, gr, gr, w, w, b, b, w, w, w, w],
  [w, w, w, w, w, w, b, b, b, b, w, w, w, w, w, w],
  [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
];
let pixelArt4 = [
  [b, o, o, o, o, o, o, o, o, o, o, o, o, o, o, b],
  [b, r, r, r, r, r, r, r, r, r, r, r, r, r, r, b],
  [b, r, r, r, r, r, r, r, r, r, r, r, r, r, r, b],
  [b, r, r, r, r, r, r, r, r, r, r, r, r, r, r, b],
  [b, r, r, r, r, r, r, r, r, r, r, r, r, r, r, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b],
  [b, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, b],
  [b, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, b],
  [b, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, b],
  [b, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, bl, b],
  [b, o, o, o, o, o, o, o, o, o, o, o, o, o, o, b],
];
let currentArt;

function setup() {
  createCanvas(640, 480);
  createWhiteCanvas();
  //maakt een leeg canvas van witte pixels en de knoppen om het canvas te vullen
  button1 = createButton("Art1");
  button1.position(600, 50);
  button1.mousePressed(art1);

  button2 = createButton("Art2");
  button2.position(600, 150);
  button2.mousePressed(art2);

  button3 = createButton("Art3");
  button3.position(600, 250);
  button3.mousePressed(art3);

  button4 = createButton("Art4");
  button4.position(600, 350);
  button4.mousePressed(art4);

  button5 = createButton("Delete Art");
  button5.position(600, 450);
  button5.mousePressed(createWhiteCanvas);

  button6 = createButton("Select Color");
  button6.position(275, 50);
  button6.mousePressed(colorSelector);

  button7 = createButton("Save Art1");
  button7.position(500, 50);
  button7.mousePressed(save1);

  button8 = createButton("Save Art2");
  button8.position(500, 150);
  button8.mousePressed(save2);

  button9 = createButton("Save Art3");
  button9.position(500, 250);
  button9.mousePressed(save3);

  button10 = createButton("Save Art4");
  button10.position(500, 350);
  button10.mousePressed(save4);
}

function draw() {
  let buttons = [button1, button2, button3, button4];
  if (available == false) {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style("background", r);
    }
  } else {
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style("background", g);
    }
  }
}

function delay(ms) {
  //wacht ms om verder te gaan met de nested for loop
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), ms);
  });
}

function createWhiteCanvas() {
  //makes a white canvas
  if (available == true) {
    pixels = [];
    pixels.length = 16;
    for (let i = 0; i < pixels.length; i++) {
      pixels[i] = [];
      pixels[i].length = 16;
      for (let j = 0; j < pixels[i].length; j++) {
        pixels[i][j] = w;
        displayArt(i, j);
      }
    }
  }
  console.log(pixels);
}

//changes the canvas to the selected drawing
async function changeArt() {
  available = false;
  for (let i = 0; i < pixels.length; i++) {
    for (let j = 0; j < pixels[i].length; j++) {
      await delay(20);
      pixels[i].splice(j, 1, currentArt[i][j]);
      displayArt(i, j);
    }
  }
  available = true;
}

//displays the selected art
let sizeH = 20;
let sizeW = 16;
function displayArt(i, j) {
  //displays the selected art on a 320 by 260 canvas
  var x = j * sizeH + 150;
  var y = i * sizeW + 150;
  fill(pixels[i][j]);
  rect(x, y, sizeH, sizeW);
}

//changes the current drawing to the selected one
function art1() {
  if (available == true) {
    createWhiteCanvas();
    currentArt = pixelArt1;
    changeArt();
  }
}
function art2() {
  console.log(pixelArt1)
  if (available == true) {
    createWhiteCanvas();
    currentArt = pixelArt2;
    changeArt();
  }
}
function art3() {
  if (available == true) {
    createWhiteCanvas();
    currentArt = pixelArt3;
    changeArt();
  }
}
function art4() {
  if (available == true) {
    createWhiteCanvas();
    currentArt = pixelArt4;
    changeArt();
  }
}

//save current drawing to designated spots
function save1() {
  pixelArt1 = pixels;
  console.log(pixelArt1);
}
function save2() {
  pixelArt2 = pixels;
}
function save3() {
  pixelArt3 = pixels;
}
function save4() {
  pixelArt4 = pixels;
}
let selectedColor = 0;
function colorSelector() {
  selectedColor++;
  if (selectedColor > colors.length) {
    selectedColor = 0;
  }
  button6.style("background-color", colors[selectedColor]);
}

//fill in the clicked on block with chosen color
function mouseClicked() {
  if (available == true) {
    let j = Math.trunc(mouseX / sizeH - 150 / sizeH);
    let i = Math.trunc(mouseY / sizeW - 150 / sizeW);
    if (j >= 0 && j < 16) {
      if (i >= 0 && i < 16) {
        pixels[i].splice(j, 1, colors[selectedColor]);
        displayArt(i, j);
      }
    }
  }
}