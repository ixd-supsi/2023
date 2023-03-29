let capture
let detector

let emoji

function preload() {
	emoji = loadImage("ugly_emoji_pix.png")
}

async function setup() {
  
	createCanvas(640, 480, WEBGL)

	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()
	
	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")

}

async function draw() {
	translate (-width/2, -height/2)
	
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

		if (hands.length == 2) {
		
			const manoA = hands[0]
			const manoB = hands[1]

			const indiceA  = manoA.keypoints[8]
			const polliceA = manoA.keypoints[4]
			const indiceB  = manoB.keypoints[8]
			const polliceB = manoB.keypoints[4]

			// ellipse(indiceA.x, indiceA.y, 50, 50)

			strokeWeight(5)
			stroke(255, 0, 0)
			noFill()
			texture(emoji)
			textureMode(NORMAL)
			beginShape()
			vertex(indiceA.x, indiceA.y, 0, 0)
			vertex(indiceB.x, indiceB.y, 1, 0)
			vertex(polliceB.x, polliceB.y, 1, 1)
			vertex(polliceA.x, polliceA.y, 0, 1)
			endShape(CLOSE)
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
