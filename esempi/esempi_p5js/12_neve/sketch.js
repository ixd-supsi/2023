
const num = 1000

const posizioneX = []
const posizioneY = []
const vel = []
const dimensione = []
const carattere = []
const alpha = []

function setup() {
	createCanvas(500, 500)
	for (let i=0; i<num; i++) {
		posizioneX[i] = random(width)
		posizioneY[i] = random(-50, height)
		vel[i] = random(0.8, 1.6)
		dimensione[i] = random(16, 48)
		carattere[i] = ".*∗⊛✢✣✤✥✱✲✳✺✻✼✽❃❉❊"[floor(random(18))]
		alpha[i] = random(100, 256)
	}
}

function draw() {
	background(0)
	for (let i=0; i<num; i++) {
		posizioneX[i] = posizioneX[i] + random(-1, 1)
		posizioneY[i] = posizioneY[i] + vel[i]

		if (posizioneY[i] > height + 50) {
			posizioneY[i] = -50
			posizioneX[i] = random(width)
		}

		fill(255, alpha[i])
		textSize(dimensione[i])
		text(carattere[i], posizioneX[i], posizioneY[i])
	}
}
