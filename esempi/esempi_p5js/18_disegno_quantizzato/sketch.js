function setup(){
    // Questa funzione crea un canvas di 400x400 pixel
    createCanvas(windowWidth, windowHeight)
    background(255)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    
    //if (mouseIsPressed) {
        const passoX = 10
        const passoY = 1000
        const colonna = floor(mouseX / passoX)
        const riga = floor(mouseY / passoY)
        const grigliaX = colonna * passoX    
        const grigliaY = riga * passoY    
        fill (random(255),random(255),random(255))
        rect (grigliaX, grigliaY, passoX, passoY)
    //}
}

function keyPressed(){
    if (key == 'x') {
        background(200)
    } else if (key == 's') {
        save("immagine.png")
    }
}