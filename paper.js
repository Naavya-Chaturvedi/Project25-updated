class paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r

		var options={
			isStatic:false,
            restitution:0.3,
			density:0.2,
			friction:0
		}
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2,this.r*2);
			pop()
            

}
}