const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 390, 1200, 30);
    box1 = new Box(700,380,70,70);
    pig1 = new Pig(800, 380);
    box2 = new Box(900,380,70, 70);
    log1 = new Log(800, 280, 400, PI);
    box3 = new Box(700, 260, 70, 70);
    pig2 = new Pig(800, 260);
    box4 = new Box(900, 260, 70, 70);
    log2 = new Log(800, 180, 400, PI);
    box5 = new Box(800, 160, 70, 70);
    log3 = new Log(840, 160, 150, PI/4);
    log4 = new Log(780, 160, 150, -PI/4);
    bird1 = new Bird(200, 120);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    ground.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}