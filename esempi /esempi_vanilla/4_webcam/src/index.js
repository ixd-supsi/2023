import { initCamera } from "./camera.js"


// Configurazione dell’elemento video
const videoConfig = {
	 width: 640, height: 480, fps: 60
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

async function boot() {

	requestAnimationFrame(loop)

	async function loop() {
		requestAnimationFrame(loop)
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		circle(ctx, 100, 100, 20, 'red')
		rect(ctx, 10, 10, 20, 20, 'white')
	}
}

function rect(ctx, x, y, w, h, color) {
	ctx.fillStyle = color
	ctx.fillRect(x, y, w, h)
}

function circle(ctx, x, y, r, color) {
	ctx.beginPath()
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}
