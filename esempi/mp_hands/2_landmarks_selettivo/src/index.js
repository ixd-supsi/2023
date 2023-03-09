import { initCamera } from "./camera.js"


// Configurazione dell’elemento video
const videoConfig = {
	 width: 640, height: 480, fps: 60
}

// Configurazione Media Pipe
// https://google.github.io/mediapipe/solutions/hands
const mediaPipeConfig = {
	runtime: "mediapipe",
	modelType: "full",
	maxHands: 2,
	solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
}

const video = document.querySelector("video")

const canvas = document.querySelector("canvas")
canvas.width = videoConfig.width
canvas.height = videoConfig.height
const ctx = canvas.getContext("2d")

console.log("Inizializzo camera.")
initCamera(
	document.querySelector("video"),
	videoConfig.width,
	videoConfig.height,
	videoConfig.fps
).then(video => {
	video.play()
	video.addEventListener("loadeddata", event => {
		console.log("Camera inizializzata.")
		boot()
	})
})

async function createDetector() {
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}

async function boot() {

	// Carica modello handpose
	console.log("Carico modello mediaPose...")
	const detector = await createDetector()
	console.log("Modello caricato.")

	requestAnimationFrame(loop)

	async function loop() {

		requestAnimationFrame(loop)

		const hands = await detector.estimateHands(video, {
			flipHorizontal: true
		})

		for (const hand of hands) {
			const keypoint = hand.keypoints[8]
			point(ctx, keypoint.x, keypoint.y, 10, 'red')
		}
	}
}

function point(ctx, x, y, r, color) {
	ctx.beginPath()
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}
