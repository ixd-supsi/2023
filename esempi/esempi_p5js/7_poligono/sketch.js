function setup() {
	createCanvas(500, 500)    
}

function draw() {
	background(255)
	noFill()

	for (let i=0; i<100; i++) {
		let rot = sin(frameCount * 0.05 + i * 0.1) * 1.5
		poligono(250, 250, 50 + i * 8, 5 + i, rot)
	}	
}

function keyPressed() {
	if (key == "s") {
		save("prova_" + Date.now() + ".png")
	}
}

function poligono(cx, cy, raggio, lati, rotazione=0) {	
	beginShape()
	for( let i=0; i<lati; i=i+1 ) {
		let a = TAU / lati * i + rotazione
		let px = cx + cos(a) * raggio
		let py = cy + sin(a) * raggio
		vertex(px, py)
	}
	endShape(CLOSE)
}

function poligonoR(cx, cy, raggio, lati, rotazione=0) {
	for( let i=0; i<lati; i=i+1 ) {
		let a = TAU / lati * i + rotazione
		let px = cx + cos(a) * raggio
		let py = cy + sin(a) * raggio
		line(cx, cy, px, py)
	}
}