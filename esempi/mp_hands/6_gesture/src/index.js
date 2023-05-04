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

const landmarkColors = {
	thumb:  'tomato',
	index:  'royalblue',
	middle: 'orange',
	ring:   'green',
	pinky:  'pink',
	wrist:  'black'
}

async function boot() {

	// Carica modello handpose
	console.log("Carico modello mediaPose...")
	const detector = await createDetector()
	console.log("Modello caricato.")


	const estimator = new fp.GestureEstimator([
		fp.Gestures.VictoryGesture,
		fp.Gestures.ThumbsUpGesture,		
	]);

	requestAnimationFrame(loop)

	async function loop() {

		requestAnimationFrame(loop)

		const hands = await detector.estimateHands(video, {
			flipHorizontal: true
		})

		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		// Mappa dei landmarks della mano:
		// https://developers.google.com/mediapipe/solutions/vision/hand_landmarker
		for (const hand of hands) {
		
			const handedness = hand.handedness // Left : Right
			const keypoints3D = hand.keypoints3D.map(keypoint => [keypoint.x, keypoint.y, keypoint.z])
			const pose = await estimator.estimate(keypoints3D, 8.5)
			
			const name = pose.gestures[0]?.name
			const score = pose.gestures[0]?.score
			if (name) {
				ctx.font = '20px sans-serif'
				ctx.fillStyle = 'white'
				if (handedness == 'Left') {
					ctx.textAlign = 'left'
					ctx.fillText(name + " [" + score.toFixed(1) + "]", 20, 30)
				} else {
					ctx.textAlign = 'right'
					ctx.fillText(name + " [" + score.toFixed(1) + "]", ctx.canvas.width - 20, 30)
				}
			}
			
			for (const [idx, keypoint] of hand.keypoints.entries()) {
				const name = keypoint.name.split('_')[0].toString().toLowerCase()
				const color = landmarkColors[name]
				point(ctx, keypoint.x, keypoint.y, 12, color)
				ctx.font = '12px sans-serif'
				ctx.textAlign = 'center'
				ctx.fillStyle = 'white'
				ctx.fillText(idx,  keypoint.x, keypoint.y + 3)
			}
		}
	}
}

function point(ctx, x, y, r, color) {
	ctx.beginPath()
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}
