class Main
{
	constructor()
	{
		this.gfx = new Graphics()
		this.kbd = new Keyboard()
		this.mouse = new Mouse( this.gfx )
	}
	
	Update()
	{
	}
	
	Draw()
	{
	}
}

const main = new Main()

setInterval( function()
{
	main.gfx.DrawRect( 0,0,main.gfx.scrWidth,main.gfx.scrHeight,"#000000" )
	main.Update()
	main.Draw()
},1000 / 60.0 )