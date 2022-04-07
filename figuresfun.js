

//cuadrado

console.group("cuadrado");
function figurescuandrado (cuadrado){
    var lados = prompt("Ingrese el valor de los lados del cuadrado");
    var perimetro = lados * 4;
    var area = lados * lados;
    console.log("Los lados del cuadro son: " +lados + "cm"+ "\n El perimetro del cuadrado es: " + perimetro + "cm" + "\n El area del cuadrado es: " + area + "cm");
}
console.groupEnd();

figurescuandrado();

//TRIANGULO

console.group("triangulo");
function figurestriangulo(triangulo){
    var ltriangulo = prompt("Ingrese el valor del lado 1 del triangulo");
    ltriangulo = parseInt(ltriangulo);
    var ltriangulo2 = prompt("Ingrese el valor del lado 2 del triangulo");
    ltriangulo2 = parseInt(ltriangulo2);
    var base = prompt("Ingrese el valor de la base del triangulo");
    base = parseInt(base);
    var altura = prompt("Ingrese el valor de la altura del triangulo");
    const perimetro = ltriangulo + ltriangulo2 + base;
    var area = (base * altura) / 2;

    console.log("El lado 1 del triangulo es: " + ltriangulo + "cm" + "\n El lado 2 del triangulo es: " + ltriangulo2 + "cm" + "\n La base del triangulo es: " + base + "cm" + "\n La altura del triangulo es: " + altura + "cm" + "\n El perimetro del triangulo es: " + perimetro + "cm" + "\n El area del triangulo es: " + area + "cm");
}
console.groupEnd();

figurestriangulo();

//CIRCULO

console.group("Circulo");
function figurescirculo(circulo){         
var radio = prompt("Ingrese el valor del radio del circulo");
var pi = Math;
var diametro = radio * 2;
var circunferencia = pi * diametro;
var area = pi * radio * radio;

console.log("el radio del circulo es: " + radio + "cm","\n su diametro es: " + diametro + "cm","\n su circunferencia es: " + circunferencia + "cm","\n su area es: " + area + "cm2");
console.groupEnd();
}
figurescirculo();
