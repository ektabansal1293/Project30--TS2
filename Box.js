class BOX {
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 30,50);
        this.width = 30;
        this.height = 50;
        this.visibility = 255; 
        this.image = loadImage("download.png");
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        if(this.body.speed < 3){
            push();
            imageMode(CENTER);
            image(this.image,pos.x,pos.y, this.width, this.height);
            pop();
        }
           else{
             World.remove(world, this.body);
             push();
             this.visibliity = this.visibility - 5;
             tint(255,this.visibility);
             image(this.image,pos.x,pos.y,this.width, this.height);
             pop();
           }
    }
}