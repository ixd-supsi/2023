SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale 

# SuperMarionetta
Autore: Hans Manon   
[https://andreolichiara.github.io/marionetta_gigi](https://andreolichiara.github.io/marionetta_gigi)


## Introduzione e tema
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec. Nisi est sit amet facilisis magna etiam tempor. Nisl nisi scelerisque eu ultrices vitae. Id aliquet lectus proin nibh nisl. Urna nec tincidunt praesent semper feugiat nibh. Imperdiet dui accumsan sit amet nulla facilisi morbi. Aliquet enim tortor at auctor urna nunc. Id cursus metus aliquam eleifend mi. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Odio morbi quis commodo odio aenean sed. Turpis cursus in hac habitasse. Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.


## Riferimenti progettuali 
Dolor sit amet consectetur adipiscing elit duis tristique. Sociis natoque penatibus et magnis dis parturient montes nascetur. Est sit amet facilisis magna. Tellus rutrum tellus pellentesque eu. Dictum sit amet justo donec enim. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed faucibus turpis in eu mi bibendum neque egestas congue. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Dolor magna eget est lorem ipsum dolor. Sit amet mattis vulputate enim nulla. Elit pellentesque habitant morbi tristique senectus et. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.



## Design dell’interfraccia e modalià di interazione
Facilisis magna etiam tempor orci eu. Felis donec et odio pellentesque diam volutpat commodo. Dis parturient montes nascetur ridiculus mus mauris vitae. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Accumsan sit amet nulla facilisi. Ultricies leo integer malesuada nunc vel risus. Est lorem ipsum dolor sit. Ultrices neque ornare aenean euismod elementum nisi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu dictum varius duis at consectetur lorem donec massa sapien. Pellentesque habitant morbi tristique senectus. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eros donec ac odio tempor orci. Pellentesque id nibh tortor id aliquet lectus. Risus feugiat in ante metus dictum at. Quam pellentesque nec nam aliquam sem et tortor consequat id. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet dictum sit amet justo donec enim.


## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.


```
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);

	// WebGL1 has different requirements for power of 2 images
	// vs. non power of 2 images so check if the image is a
	// power of 2 in both dimensions.
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		// Yes, it's a power of 2. Generate mips.
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		// No, it's not a power of 2. Turn off mips and set
		// wrapping to clamp to edge
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.

[<img src="https://i.pinimg.com/originals/91/7b/f0/917bf066cacbd15ee871e9d75736470a.jpg" width="300" alt="Supplemento al dizionario italiano">]()  


