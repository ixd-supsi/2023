let posizioneX = 250
let posizioneY = 250
let velX = 1
let velY = 0
const diametro = 30

function setup() {
	createCanvas(500, 500)    
}

function draw() {
	background(230, 230, 230)
	
	ellipse(posizioneX, posizioneY, diametro, diametro)

	posizioneX = posizioneX + velX 
	posizioneY = posizioneY + velY

	console.log(posizioneX, posizioneY)

}
