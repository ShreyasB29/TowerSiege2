const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grounds,stage1,stage2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ubox1,ubox,ubox3,ubox4,ubox5,ubox6,ubox7,ubox8,ubox9;
var hitobject;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    grounds=new Ground(600,585,1400,25);
    stage1=new Ground(600,495,350,10);
    stage2=new Ground(1000,305,300,10);

    box1=new Boxb(600,465)
    box2=new Boxb(640,465);
    box3=new Boxb(680,465);
    box4=new Boxb(560,465);
    box5=new Boxb(520,465);
    box6=new Boxb(480,465);
    box7=new Boxb(720,465);
    box8=new Boxy(600,415);
    box9=new Boxy(640,415);
    box10=new Boxy(680,415);
    box11=new Boxy(560,415);
    box12=new Boxy(520,415);
    box13=new Boxg(600,365);
    box14=new Boxg(640,365);
    box15=new Boxg(560,365);
    box16=new Boxo(600,315);

    ubox1=new Boxo(1000,275);
    ubox2=new Boxo(960,275);
    ubox3=new Boxo(920,275);
    ubox4=new Boxo(1040,275);
    ubox5=new Boxo(1080,275);
    ubox6=new Boxp(1000,225);
    ubox7=new Boxp(960,225,);
    ubox8=new Boxp(1040,225);
    ubox9=new Boxb(1000,175);

    hitobject=new Poly(150,400);
    sling=new Launch(hitobject.body,{x:150,y:420});
 
}

function draw(){

    background(0);
    Engine.update(engine);

    fill("red");
    text("PRESS SPACEBAR FOR MULTIPLE CHANCES",30,50)

    grounds.display();
    stage1.display();
    stage2.display();

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

    ubox1.display();
    ubox2.display();
    ubox3.display();
    ubox4.display();
    ubox5.display();
    ubox6.display();
    ubox7.display();
    ubox8.display();
    ubox9.display();

    hitobject.display();
    sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hitobject.body,{x:mouseX ,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(hitobject.body,{x:150,y:400});
        sling.attach(hitobject.body);
    }
}