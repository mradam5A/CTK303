let state = 0;


function setup() {
resizeCanvas (windowWidth, windowHeight);
let cnv = createCanvas(960, 540);
  cnv.id('canvas2'); 

  createCanvas(displayWidth, displayHeight);
}

function draw() {
  switch (state) {

    case 0:
      scene0();
      break;

    case 1:
      scene1();
      break;

    case 2:
      scene2();
      break;

    case 3:
      scene3();
      break;

    case 4:
      scene4();
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;
}

function scene0() {
  
    background('rgb(171,158,199)');
      text("1", 100, 100);

      fill('rgb(211,143,224)');
      for (let j = 0; j < 100; j = j + 2) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 17, j * 30, 10, 50);}}
}

function scene1() {
   
   let circleSize = 50;
            let incTwo = 10;
            background("rgb(101,75,75)");
            for(let i = 2;i < 400;i+=incTwo){
                for(let j = 7;j < 300;j+=incTwo){
                    for(let k = 2;k < 100;k+=incTwo/2){
                        stroke("rgb(78,78,78)")
                        fill("#CFCECF");
                        circle(i * 20, j * 10, 60, 4);
                    }}}
}

function scene2() {
  background("rgb(210,19,19)");
  for (var j = 0; j < 3000; j += 25)
    for (var i = 0; i < 3000; i += 25) {

      rotate(60);
      rect(i, j, 40, 10);
   
    }
}

function scene3() {
   background('rgb(145,187,230)');
            for(let j = 0;j < 100;j++){
                for(let i = 0;i < 100;i++){
                  //  push();
                    fill('rgb(103,235,196)');
                    rect(i*35,j*20,i+j,i+j);
                  //  pop();
                }
            }
}

function scene4() {
 background('#CEEB6D');
      text("1", 100, 100);

      fill('rgb(240,180,27)');
      for (let j = 0; j < 100; j = j + 2) {
        for (let i = 0; i < 100; i++) {
          rect(i * 80, j * 70, 50, 80);
        }
      }
}
