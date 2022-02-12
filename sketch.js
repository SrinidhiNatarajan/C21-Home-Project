
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload(){

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:true,
		restitution : 0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(20,60,30,ball_options)
	World.add (world,ball)

	
	groundObj = new Ground (50,600,20,1200)
	leftSide = new Ground (1100,600,20,120)
	rightSide = new Ground (1300,600,20,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
groundObj.display()
leftSide.display()
rightSide.display()


  ellipse(ball.position.x,ball.position.y,30)
  Engine.update(engine);



  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0},{x:0.05,y:0}, 30)
	}
}

	

