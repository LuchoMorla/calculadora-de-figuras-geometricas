//codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
        return lado * 4;
} 
function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){ 
    return lado1 + base + lado2;
}
function areaTriangulo(base, altura){
    return (( base * altura ) / 2 );
} 

console.groupEnd();

//codigo del circulo
console.group("Circulo");

const PI = Math.PI;
function diametro(radio){
    return radio * 2;
} 

function perimetroCirculo(radio) {
    var diametros = diametro(radio);
    return diametros * PI;
    console.log(diametros)
} 
function areaCirculo(radio) {
    return ((radio ** 2) * PI);
}
console.groupEnd();

//Comenzamos con la interacción con el html

function calculaPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;    
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
    pericua = document.getElementById("periCua");
    pericua.innerHTML = "El perimetro del cuadrado es: " + perimetro + " cm";
}
function calculaAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    areacua = document.getElementById("areaCua");
    areacua.innerHTML = "El area del cuadrado es: " + area + " cm";
}
// Triangulo

function calculaPerimetroTriangulo() {
    var value1 = document.getElementById("inputTriangulo-lado1");
    var value3 = document.getElementById("inputTriangulo-base");
    var value2 = document.getElementById("inputTriangulo-lado2");
    var  lado1 = value1.value;
    var lado2 = value2.value;
    var base = value3.value;
    const perimetrian = perimetroTriangulo(lado1, lado2, base);
    peritri = document.getElementById("periTri");
    peritri.innerHTML = "El area del cuadrado es: " + perimetrian + " cm";
}


function calculaAreaTriangulo() {
    var value3 = document.getElementById("inputTriangulo-base");
    var value4 = document.getElementById("inputTriangulo-altura")
    var base = value3.value;
    var altura = value4.value;
    const areatrian = areaTriangulo(base, altura);
    areatri = document.getElementById("areaTri");
    areatri.innerHTML = "El area del cuadrado es: " + areatrian + " cm"
}
//calculos del circulo
function calculaPerimetroCirculo() {
var mitaDiametro = document.getElementById("inputCirculo")
var radio = mitaDiametro.value;
var perimetroCircula = perimetroCirculo(radio);
console.log(perimetroCircula)
pericir = document.getElementById("periCir");
pericir.innerHTML = "El perimetro del circulo es: " + perimetroCircula + " cm";
}

function calculaAreaCirculo() {
    var mitaDiametro = document.getElementById("inputCirculo")
    var radio = mitaDiametro.value;
    var areaCircula = areaCirculo(radio);
    console.log(areaCircula)
    areacir = document.getElementById("areaCir");
    areacir.innerHTML = "El area del circulo es: " + areaCircula + " cm^2";
}
// triangulo plus

function alturaTrianguloIsosceles(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        // ...
    }
}
// calculo de la altura del trianguloIsoseles
// con Math.sqert se calculo la raiz cuadrada
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}