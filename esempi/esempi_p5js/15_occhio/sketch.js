
let occhioX = 200
let occhioY = 250
let occhioRaggio = 60
let pupillaRaggio = 15

function setup(){
	createCanvas(720, 480)
	background(255)
}

function draw(){

	let dX = mouseX - occhioX
	let dY = mouseY - occhioY
	let distanza = sqrt(dX * dX + dY * dY)
	let d = min(distanza, occhioRaggio - pupillaRaggio)	
	let pupillaX = occhioX + dX / distanza * d
	let pupillaY = occhioY + dY / distanza * d

	background(200)

	noStroke()
	fill (255)
	ellipse(occhioX, occhioY, occhioRaggio * 2, occhioRaggio * 2)

	fill(0)
	ellipse(pupillaX, pupillaY, pupillaRaggio * 2, pupillaRaggio * 2)
}
