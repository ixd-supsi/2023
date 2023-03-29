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

	// noStroke()
	// fill(255, 10)
	// rect(0, 0, width, height)

	// Disegna la webcam sullo stage, a specchio
	push()
	scale(-1, 1)
	image(capture, -640, 0)
	pop()

	if (detector && capture.loadedmetadata) {
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })

		for (let j=0; j<hands.length; j++) {
			const hand = hands[j]
			const handedness = hand.handedness // Left : Right
			// for (let i=0; i<hand.keypoints.length; i++) {
			// 	const k = hand.keypoints[i]
			// 	// const name = k.name.split('_')[0].toString().toLowerCase()
			// 	noStroke()
			// 	fill(random(255), random(255), random(255))
			// 	ellipse(k.x, k.y, 12)
			// }

			noStroke()
			fill(255,0,0)
			for (let i=0; i<5; i++) {
				const k = hand.keypoints[i * 4 + 4]
				ellipse(k.x, k.y, 50, 50)
			}
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
