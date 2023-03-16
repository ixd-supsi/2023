let posizioneX = 250

function setup() {
	createCanvas(500, 500)    
}

function draw() {
	background(230, 230, 230)
	
	ellipse(posizioneX, 250, 20, 20)

	posizioneX = posizioneX + 1
}
