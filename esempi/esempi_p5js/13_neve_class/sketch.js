
const fiocchi = []

const margine = 50

function setup() {
	createCanvas(500, 500)

	for (let i=0; i<1000; i++) {
		fiocchi.push(new Fiocco(random(width), random(-margine, height)))
	}
}

function draw() {
	background(0)

	for (const f of fiocchi) {
		f.x = f.x + random(-1, 1)
		f.y = f.y + f.vel
		if (f.y > height + margine) {
			f.y = -margine
			f.x = random(width)
		}
		fill(255, f.alpha)
		textSize( f.dimensione)
		text( f.carattere, f.x, f.y)
	}
}

class Fiocco{
	constructor(x, y) {
		this.x = x
		this.y = y
		this.vel = Math.random(0.8, 1.6)
		this.dimensione = Math.random() * 32 + 16
		this.carattere = ".*∗⊛✢✣✤✥✱✲✳✺✻✼✽❃❉❊"[Math.floor(Math.random() * 18)]
		this.alpha = Math.random() * 127 + 128
	}
}
