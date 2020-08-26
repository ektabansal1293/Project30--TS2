const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  poly = loadImage("Polygon.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,390,800,20);
  stand1 = new Ground(400,300,200,10);
  stand2 = new Ground(650,200,120,10);

  //level 3 for 1 st line
  box1 = new BOX(325,270);
  box2 = new BOX(355,270);
  box3 = new BOX(385,270);
  box4 = new BOX(415,270);
  box5 = new BOX(445,270);
  box6 = new BOX(475,270);

   //level 2 for 1 st line
   box7 = new BOX(355,220);
   box8 = new BOX(385,220);
   box9 = new BOX(415,220);
   box10 = new BOX(445,220);

   //level 1 for 1 st line
   box11 = new BOX(385,170);
   box12 = new BOX(415,170);

   box13 = new BOX(400,120);

  //level 3 for 2nd line
   box14 = new BOX(620,170);
   box15 = new BOX(650,170);
   box16 = new BOX(680,170);

   //level 1 for 2nd line
   box17 = new BOX(650,120);

   Polygon = Bodies.circle(50,200,20);
   World.add(world,Polygon);

   sling = new SlingSHOT(Polygon,{x:150,y:200});

}


function draw() {
  background("yellow");

  imageMode(CENTER);

  Engine.update(engine);
  ground.display(); 
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();

  box9.display();
  box10.display();

  box11.display();
  box12.display();

  box13.display();

  box14.display();
  box15.display(); 
  box16.display();

  box17.display();

  image(poly,Polygon.position.x,Polygon.position.y,40,40);

  sling.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.udda();
}