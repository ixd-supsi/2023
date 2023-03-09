const canvas = document.querySelector("canvas")
canvas.width = 800
canvas.height = 600
const ctx = canvas.getContext("2d")

const mouse =  {
	x : -100,
	y : -100
}

requestAnimationFrame(loop)

function loop() {

	requestAnimationFrame(loop)

	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	circle(ctx, mouse.x, mouse.y, 20, 'red')
	rect(ctx, 10, 10, 20, 20, 'white')
}

canvas.addEventListener('mousedown', function(e){
})

canvas.addEventListener('mousemove', function(e){
	mouse.x = e.offsetX
	mouse.y = e.offsetY		
})

canvas.addEventListener('mouseup', function(e){
	
})

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
