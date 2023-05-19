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
        const passoX = 100
        const passoY = 50
        const colonna = floor(mouseX / passoX)
        const riga = floor(mouseY / passoY)
        const grigliaX = colonna * passoX    
        const grigliaY = riga * passoY    
        fill (random(255),random(255),random(255))
        rect (grigliaX, grigliaY, passoX, passoY)
        fill(255)
        text(colonna + ", " + riga, grigliaX + 5, grigliaY + 20)
        text(mouseX + ", " + mouseY, grigliaX + 5, grigliaY + 34)
    //}
}

function keyPressed(){
    if (key == 'x') {
        background(200)
    } else if (key == 's') {
        save("immagine.png")
    }
}