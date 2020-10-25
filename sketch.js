
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, mango1,sling;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
} 	


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone1 = new Stone(125,500,40,40);
	tree = new Tree(750,500,500,500);
	sling = new Slingshot(stone1.body,{x:130,y:545});
	mango = new Mango(600,400,2,2);
	mango1 = new Mango(650,350,2,2);
	mango2 = new Mango(730,300,2,2);
	mango3 = new Mango(700,450,2,2);
	mango4 = new Mango(800,448,2,2);
	mango5 = new Mango(840,489,2,2);
	mango6 = new Mango(730,455,2,2);
	mango7 = new Mango(790,439,2,2);
	mango8 = new Mango(950,425,2,2);
	mango9 = new Mango(600,428,2,2);
	mango10 = new Mango(600,467,2,2);
	boy1 = new boy(200,600,190,220);
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(229,299,299);
  Engine.update(engine);
  ground.display();
  tree.display()
  boy1.display();;
  
 
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  sling.display();

  detectCollision(stone1,mango);
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
  stone1.display();
 // drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32) {
		//Matter.Body.setPosition(stone1.body,{x:125,y:500});
		console.log("inside key presed : " + keyCode);
		sling.attach(stone1.body);
	}
}

function detectCollision(stone1,mango){
   mango1BodyPosition = mango1.body.position
   stone1BodyPosition = mango1.body.position 

   var distance = dist(stone1BodyPosition.x, stone1BodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
   if(distance<=mango1.r+stone1.r){
	   Matter.Body.setStatic(mango1.body, false);

   }
}