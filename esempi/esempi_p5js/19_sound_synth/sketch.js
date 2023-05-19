let polySynth;

const scalaCromatica = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
]

const scalaIo = [
    "A", 
    "B",
    "C", 
    "D", 
    "E", 
    "F", 
    "G", 
]

const scala = scalaIo

function setup(){    
    createCanvas(windowWidth, windowHeight)
    background(255)

    userStartAudio()

    polySynth = new p5.PolySynth()
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

let ultimaColonna = -1

function draw(){       
    const passoX = 40    
    const colonna = floor(mouseX / passoX)  
    if (ultimaColonna != colonna) {  
        const grigliaX = colonna * passoX    
        fill (random(255),random(255),random(255))
        rect (grigliaX, 0, passoX, height)

        
        let nota = colonna % scala.length
        let ottava = Math.floor(colonna / scala.length)

        playNota(scala[nota], 4 + ottava)

        ultimaColonna = colonna
    }
}

function mousePressed() {
    const passoX = 20    
    const colonna = floor(mouseX / passoX)    
    const grigliaX = colonna * passoX    
    fill (random(255),random(255),random(255))
    rect (grigliaX, 0, passoX, height)

    
    let nota = colonna % scala.length
    let ottava = Math.floor(colonna / scala.length)

    playNota(scala[nota], 4 + ottava)
}

function playNota(nota, ottava) {    
    let dur = 0.3
    let vel = 0.1
    polySynth.play(nota + ottava, vel, 0, dur)
}