class Boxb{
    constructor(x,y){
        var ground_options={
            isStatic:false,
            restitution:0.7,
            friction:0.4,
            density:0.8            
            }
        this.body = Bodies.rectangle(x,y,40,50,ground_options);
        this.Visibility=225;
        this.blue=loadImage("blue.png");
        World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;

        if(this.body.speed<5){
        push();
        imageMode(CENTER);
        image(this.blue,pos.x,pos.y,40,50)
        pop();
        }else{
        
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        imageMode(CENTER);
        image(this.blue,pos.x,pos.y,40,50)
        pop();
        World.remove(world,this.body);
        }
    }
}