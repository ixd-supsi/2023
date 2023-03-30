

function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	background(255,0,0)
	noStroke()
	
	const larghezza = min(width, height)
	const altezza = larghezza / 3.5
	push()	
	translate (width/2, height/2)
	rotate (TAU / 8)
	rect (-larghezza/2, -altezza/2, larghezza, altezza)
	rect (-altezza/2, -larghezza/2, altezza, larghezza)
	pop()
	
	ellipse(60, 60, 80, 80)
	ellipse(width - 60, height/2, 80, 80)

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
