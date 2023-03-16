
function setup() {
	createCanvas(800, 600, WEBGL)   
}

function draw() {

	background(0)
	stroke(255)
	
	
	const c = 400

	if(mouseIsPressed) randomSeed(0)

	rotateX(mouseY * 0.01)
	rotateY(mouseX * 0.01)

	

	for(let i=0; i<500; i+=1) {
		const l = random(10, 100)
		const x = random(-c, c)
		const y = random(-c, c)
		const z = random(-c, c)
		strokeWeight(random(1, 3))
		line(x, y, z, x, y + l, z)
	}
	
}
