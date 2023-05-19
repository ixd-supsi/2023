
const CROMATICA = [
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

const PENTATONICA_MAJ = [
    "A",
    "C",
    "D",
    "E",
    "G",
]

const PENTATONICA_MIN = [
    "A#", 
    "C", 
    "D#", 
    "F", 
    "G", 
]

const EGYPT = [
    "A#",
    "C",
    "D",
    "F",
    "G",
]

const scala = EGYPT
// const scala = PENTATONICA_MIN
// const scala = PENTATONICA_MAJ

let ultimaColonna = -1
let synth
let reverb

function setup(){    
    createCanvas(windowWidth, windowHeight)
    
    background(255)
    noStroke()

    userStartAudio()
    reverb = new p5.Reverb()
    synth = new p5.MonoSynth()
    synth.disconnect()
    synth.connect(reverb)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){       
    const suddivisioni = 36
    const passoX   = Math.floor(width / suddivisioni)
    const colonna  = floor(mouseX / passoX)  
    const grigliaX = colonna * passoX   
    
    if (ultimaColonna != colonna) {         
        
        if (mouseIsPressed) {
            // Sound
            const nota = colonna % scala.length
            const ottava = 3 + Math.floor(colonna / scala.length)
            const w = constrain(mouseY / height, 0, 1);
            reverb.drywet(w)
            playNota(scala[nota], ottava)


            // Disegno
            const r = nota / scala.length * 128  + ottava * 16
            const b = mouseY / height * 255 
            fill (r, 0, b)
            rect (grigliaX, 0, passoX, height)
        } else {
            fill(colonna / suddivisioni * 255)
            rect (grigliaX, 0, passoX, height)
        }

        // Evitiamo il souno continuo
        ultimaColonna = colonna
    }
}

function playNota(nota, ottava) {    
    const att = 0.05 // attack
    const del = 0.05 // delay
    const sus = 0.3  // sustain
    const rel = 0.2  // release
    synth.play(nota + ottava, att, del, sus, rel)
}