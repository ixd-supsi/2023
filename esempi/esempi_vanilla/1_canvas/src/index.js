const canvas = document.querySelector("canvas")
canvas.width = 800
canvas.height = 600
const ctx = canvas.getContext("2d")

requestAnimationFrame(loop)

function loop() {

	requestAnimationFrame(loop)

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
