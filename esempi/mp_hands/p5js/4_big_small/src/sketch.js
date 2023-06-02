let capture
let detector

async function setup() {

	createCanvas(640, 480)

	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()

	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")

}

async function draw() {

	background(255)

	// Disegna la webcam sullo stage, a specchio
	push()
	scale(-1, 1)
	image(capture, -640, 0)
	pop()

	if (detector && capture.loadedmetadata) {

		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })

		if (hands.length > 0) {

			const mano = hands[0]
			
			const indice  = mano.keypoints[8]
			const pollice = mano.keypoints[4]

			const lettere = "CIAO"
			const idx = Math.floor(indice.x / width * lettere.length )
			const lettera = lettere[idx]

			const angolo = atan2(indice.y - pollice.y, indice.x - pollice.x)
			const lunghezza = dist(indice.x, indice.y, pollice.x, pollice.y)

			translate (pollice.x, pollice.y)
			rotate (angolo + PI/2)

			//textAlign(CENTER)
			noStroke()
			fill (255, 0, 255)
			textSize(lunghezza * 1.4)
			text(lettera, -lunghezza * 0.2, 0)

			strokeWeight(3)
			// X
			stroke(255, 0, 0)
			line (0, 0, lunghezza, 0)
			// Y
			stroke(0, 255, 0)
			line (0, 0, 0, -lunghezza)

		}
	}
}

async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 2,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}
