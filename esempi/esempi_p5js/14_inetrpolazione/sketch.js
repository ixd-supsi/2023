
let pX, pY

function setup(){
	createCanvas(720, 480)
	background(255)
	pX = width / 2
	pY = height / 2
}

function draw(){
	background(200)

	pX = pX + (mouseX - pX) * 0.05
	pY = pY + (mouseY - pY) * 0.05
	ellipse(pX, pY, 50, 50)
}
