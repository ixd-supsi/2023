function setup(){
    // Questa funzione crea un canvas di 400x400 pixel
    createCanvas(400, 400)
    background(255)
}

function draw(){
    if (mouseIsPressed) {

        const r = map(sin(frameCount * 0.021), -1, 1, 0, 255)
        const g = map(sin(frameCount * 0.022), -1, 1, 0, 255)
        const b = map(sin(frameCount * 0.023), -1, 1, 0, 255)
        const d = map(sin(frameCount * 0.020), -1, 1, 10, 100)

        fill(r,g,b)
        ellipse(mouseX, mouseY, d, d)
        ellipse(width-mouseX, mouseY, d, d)
    }
}

function keyPressed(){
    if (key == 'x') {
        background(200)
    } else if (key == 's') {
        save("immagine.png")
    }
}