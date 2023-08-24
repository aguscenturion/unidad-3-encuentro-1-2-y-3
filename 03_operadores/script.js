//OPERADORES
//OPERADOR DE ASIGNACION  --->   =

const constante = 'le asigno este valor';

//OPERADORES ARITMETICOS
const suma = 2 + 2;  // EL + ES EL OPERADOR ARITMETICO DE LA SUMA
console.log('El valor de la suma es: ', suma)
const resta = 10 - 2;  // EL - ES EL OPERADOR ARITMETICO DE LA RESTA
console.log('El valor de la resta es: ', resta)
const multiplicacion = 2 * 5 //EL * ES EL OPERADOR ARITMETICO DE LA MULTIPLICACION
console.log('El valor de la multiplicacion es: ', multiplicacion)
const division = 10 / 2; //LA / ES EL OPERADOR ARITMETICO DE LA DIVISION
console.log(division)
const exponente = 2 ** 3 //EL ** ES EL OPERADOR DE EXPONENTE
const resto = 5 % 2 // EL % ES EL OPERADOR QUE NOS VA A DAR EL RESTO DE UNA DIVISION

//AUMENTADORES Y DISMINUIDORES
//AUMENTADOR
let numero1 = 5

console.log(numero1)

numero1++

console.log(numero1)

//DISMINUIR
let numero2 = 10;

console.log(numero2)

numero2--

console.log(numero2)


//OPERADORES LOGICOS

let numero = 5; //number
let otroNumero = 10; //string

//IGUAL QUE
let resultado = numero == otroNumero; //BOOLEAN (TRUE O FALSE)

//IGAUL QUE ESTRICTAMENTE, COMPARA TAMBIEN EL TIPO
let resultado1 = numero === otroNumero; //BOOLEAN (TRUE O FALSE)

// console.log(resultado1)

//OPERADOR DE NEGACION O DISTINTO QUE
let negacion = numero != otroNumero;

let negacion1 = numero !== otroNumero;

console.log(negacion1)

//OPERADORES MAYOR / MENOR/ E IGUAL
let numero3 = 5; //number
let otroNumero3 = 10; //string

let mayor = numero3 > otroNumero3; //BOOLEAN (TRUE O FALSE)
let menor = numero3 < otroNumero3; //BOOLEAN (TRUE O FALSE)
let menorIgual = numero3 <= otroNumero3; //BOOLEAN (TRUE O FALSE)
let mayorIgual = numero3 >= otroNumero3; //BOOLEAN (TRUE O FALSE)

console.log(mayor)
console.log(menor)
console.log(menorIgual)
console.log(mayorIgual)

//COMBINACION DE VALORES LOGICOS
//OPERADOR Y o && - CONJUNCION

let a = 5;
let b = 10;
let c = 3;

//                          V        F          =
let resultadoCombinacion = 5 < 10 && 2 > 3;  //false

//OPERADOR O - || - DISJUNCION
let edad = 17;
let otroResultado = edad === 18 || edad === 30 //false

//NEGACION - PARA NEGAR UN VALOR
let documentacion = true; 
console.log(!documentacion)



