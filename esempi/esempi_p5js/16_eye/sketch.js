
let eyes = []

function setup(){
	createCanvas(800, 600)	
	
	// eyes[0] = loadImage('eye/eye_0.png')
	// eyes[1] = loadImage('eye/eye_1.png')
	// eyes[2] = loadImage('eye/eye_2.png')
	// eyes[3] = loadImage('eye/eye_3.png')
	// eyes[4] = loadImage('eye/eye_4.png')
	// eyes[5] = loadImage('eye/eye_5.png')
	// eyes[6] = loadImage('eye/eye_6.png')
	// eyes[7] = loadImage('eye/eye_7.png')
	// eyes[8] = loadImage('eye/eye_8.png')
	// eyes[9] = loadImage('eye/eye_9.png')
	// eyes[10] = loadImage('eye/eye_10.png')
	// eyes[11] = loadImage('eye/eye_11.png')
	// eyes[12] = loadImage('eye/eye_12.png')
	// eyes[13] = loadImage('eye/eye_13.png')

	for (let i=0; i<14; i++) {
		eyes[i] = loadImage('eye/eye_' + i + '.png')
	}
}

function draw(){
	
	
	
	for (let j=0; j<10; j++) {
		for (let i=0; i<10; i++) {
			const o = (floor(frameCount/3) + i + j) % eyes.length
			image(eyes[o], i * 100, j * 75, 100, 75)
		}
	}
		
}
