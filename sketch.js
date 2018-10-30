var data;
var forme = [];
var sfondo;

function preload() {
    // data = loadJSON('./assets/data.json');
    data = loadJSON('./assets/fibonacci.json');
    sfondo = loadImage('./assets/sfondo.jpeg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data);
  image(sfondo, 0,0, windowWidth, windowHeight);
  fill('white');
  var testo ='Click to see Fibonacci sequence';
  textFont('KoHo');
  textSize(20);
  text(testo,10,30);

  for(var i=0; i<data.tutta.length; i++ ) {
    // properties
    var x = data.tutta[i].Number;
    var y = data.tutta[i].Number;
    var size = data.tutta[i].Fibonaccinumber/30;
    var cifra = data.tutta[i].Fibonaccinumber;


    var myCerchio = new Cerchio(x, y, size, cifra);
    forme.push(myCerchio);
  }


}


function draw() {
  if (mouseIsPressed==true) {
  for(var j = 0; j < forme.length; j++) {
    forme[j].display();
  }
}



}



function Cerchio(_x, _y, _lunghezza, _cifra) {
	//Properties defined by constructor
this.size = _lunghezza;
this.x = _x;
this.y = _y;
this.cifra=_cifra;


	this.display = function() {
    noFill();
    strokeWeight(2);
    stroke('white');
    ellipse(windowWidth/2,windowHeight/2,this.size);
    textAlign(CENTER);
    textSize(10);
    fill('red');
    text(_cifra, windowWidth/2,windowHeight/2-this.size/2-10);
}

}
