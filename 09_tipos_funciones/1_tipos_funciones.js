//FUNCIONES DECLARATIVAS

function sumar(){
    let suma = 2 + 2;
    // alt+96 
    return suma; //4
}

const resultadoFuncion = sumar();  //4

// console.log('el resultado de la funcion declarativa con return es', resultadoFuncion)

function sumar2(){
    let suma = 2 + 2;
    // alt+96 
    console.log('el resultado de la suma con console.log es', suma);
}

// sumar2(); //4

//FUNCIONES EXPRESIVAS
let sumando = function () {
    let suma2 = 5 + 5;
    // alt+96 
    console.log('el resultado de la suma de la funcion expresiva es', suma2);
}

// sumando()

//FUNCIONES FLECHAS
let sumando2 = () => {
    let suma3 = 10 + 10;
    console.log('El resultado de la suma de la funcion flecha es', suma3)
}
// sumando2()


//RETURN IMPLICITO
let sumandoFlecha = () => 2 * 4;  //8
//ESTAS DOS FUNCIONES FLECHAS SON IGUALES
let sumandoFlecha1 = () =>{
    return 2 * 4;  //8
} 


// console.log('el resultado de sumandoFlecha Implicito es', sumandoFlecha())
// console.log('el resultado de sumandoFlecha1 Implicito es', sumandoFlecha1())


//TIPOS DE ARGUMENTOS EN JAVASCRIPT
//SIN ARGUMENTOS
function saludar(){
    console.log('Hola como estas?')
}
// saludar()

//ARGUMENTOS OBLIGATORIOS
function sumaObligatoria(numero1, numero2){
    let suma = numero2 + numero1; //50
    console.log('el resultado de la suma obligatoria es', suma)
}


// let numero1 = 5;
// let numero2 = 10;
// let suma = numero1 + numero2; //15
// ====
// sumaObligatoria(2,2)

//ARGUMENTOS POR DEFECTO
function sumaPorDefecto(numero1 = 2, numero2 = 5){
    let suma = numero2 + numero1; //50
    console.log('el resultado de la suma por defecto es', suma)
}

sumaPorDefecto(10, 10)




