const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var ensgine, world;
var box1;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12= new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    box16 = new Box(390,155,30,40);
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(390,300,250,10);
    ground3 = new Ground(700,200,200,10)

    b1=new Box(640,175,30,40);    
    b2=new Box(670,175,30,40);
    b3=new Box(700,175,30,40);
    b4=new Box(730,175,30,40);
    b5=new Box(760,175,30,40);

    
    b6=new Box(670,135,30,40);
    b7=new Box(700,135,30,40);
    b8=new Box(730,135,30,40);

    b9=new Box(700,95,30,40);
    


   /*box1 = new Box(900, 100, 70, 70);
   box2 = new Box(900, 100, 70, 70);
   box3 = new Box(900, 100, 70, 70);
   box4 = new Box(900, 100, 70, 70);
   box5 = new Box(900, 100, 70, 70);
   box6 = new Box(900, 100, 70, 70);
   box7 = new Box(800, 100, 70, 70);
   box8 = new Box(800, 100, 70, 70);
   box9 = new Box(800, 100, 70, 70);
   box10 = new Box(800, 100, 70, 70);
   box11 = new Box(800, 100, 70, 70);
   box12 = new Box(800, 100, 70, 70);
   box13 = new Box(700, 100, 70, 70);
   box14 = new Box(700, 100, 70, 70);
   box15 = new Box(700, 100, 70, 70);
   box16 = new Box(700, 100, 70, 70);
   box17 = new Box(700, 100, 70, 70);
   box18 = new Box(700, 100, 70, 70);
   box19 = new Box(700, 100, 70, 70);
   box20 = new Box(700, 100, 70, 70);*/
 
ball=new Ball(50,200,20,20)
Sling1=new SlingShot(ball.body,{x:500,y:50})
}

function draw(){
    background("lightblue");

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("blue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    fill("black");
    box16.display();
 //   box17.display()
   // box18.display()
    //box19.display()
  //  box20.display()
    Sling1.display();

    fill("green")
    ground.display();
    ground2.display();
    ground3.display();
    fill("gold");
   b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    fill("red")
    b9.display();

    ball.display();
}
    function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
      }

      function mouseReleased(){
        Sling1.fly();
      }

 


