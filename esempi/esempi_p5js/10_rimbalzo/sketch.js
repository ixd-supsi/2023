let posizioneX = 250
let posizioneY = 250
let velX = 5
let velY = 6
const diametro = 30

function setup() {
	createCanvas(500, 500)   
	background(230, 230, 230) 
}

function draw() {
	
	posizioneX = posizioneX + velX 
	if (posizioneX > width || posizioneX < 0) {
		velX = -velX
	}
	
	posizioneY = posizioneY + velY
	if (posizioneY > height || posizioneY < 0) {
		velY = -velY
	}
	
	//background(230, 230, 230)
	ellipse(posizioneX, posizioneY, diametro, diametro)
 
}
