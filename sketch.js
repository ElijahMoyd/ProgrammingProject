var diam1=0;


function setup() {
  createCanvas(1600,1600);
    background("#0B82EE");
}

function draw() {
    fill("#F35328");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(50,100,diam1,diam1);
    diam1=diam1+5
    fill("#ff0000");
    ellipse(mouseX,mouseY,20,20);
    textSize(24);
    textFont("Arial");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Elijah",40,40);
    console.log(diam1);
    
}

function mousePressed(){
 if(diam1>50)  {
    diam1=0;
    }else{
    diam1=diam1+5;
    }
    
    }

