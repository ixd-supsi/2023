const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

requestAnimationFrame(loop)

let width = 0
let height = 0

function loop() {

	requestAnimationFrame(loop)

	if (window.innerWidth != width || window.innerHeight != width) {
		width = window.innerWidth
		height = window.innerHeight
		canvas.width = width
		canvas.height = height
	}

	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	circle(ctx, 100, 100, 20, 'red')
	rect(ctx, 10, 10, 20, 20, 'white')
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
