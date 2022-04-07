const lcuadrado = 5;
const perimetrocuadrado = lcuadrado * 4;
const area = lcuadrado * lcuadrado;

console.group("Cuadrado");
    console.log(" los lados del cuadrado son: " + lcuadrado + "cm", "su perimetro es: " + perimetrocuadrado + "cm" , "y su area es: " + area + "cm2");
console.groupEnd();
//TRIANGULO

const ltriangulo = 6;
const ltriangulo2 = 6;
const base = 4;
const altura = 5.5;
const perimetro = ltriangulo + ltriangulo2 + base;
const area2 = (base * altura) / 2;

function triangulo(base, altura){
    return (base * altura) / 2;
    
}

console.group("Triangulos");
    console.log("los lados del triangulo son: " + ltriangulo + "cm" + " para lado 1",
     ltriangulo2 + "cm" + " para lado 2",
     "y la base es: " + base + "cm",
     "y la altura es: " + altura + "cm",
     ", su perimetro es: " + perimetro + "cm",
     "y su area es: " + area2 + "cm2");
console.groupEnd();


//CIRCULO

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
const circunsferenciacirculo = diametro * PI;
const areacirculo = PI * radio * radio;

console.group("Circulo");
    console.log("el radio del circulo es: " + radio + "cm",
    "su diametro es: " + diametro + "cm",
    "su circunferencia es: " + circunsferenciacirculo + "cm",
    "y su area es: " + areacirculo + "cm2");
console.groupEnd();

