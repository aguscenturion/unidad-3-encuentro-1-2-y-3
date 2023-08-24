
//indice o posicion 0       1     2  3  4  5 
let elementos = ['Juan', 'Perez', 1, 2, 3, 4]


//saber el largo de un arreglo
// console.log(elementos.length)


// elementos[elementos.length] = 'Posicion Seis'
// const elementoPush = elementos.push('Elemento')

// console.log(elementos)

//METODO MAP

let frutas = ['Banana', 'Manzana', 'Pera', 'Uva', 'Banana', 'Banana'];


let frutasMap = frutas.map( fruta => {
    return fruta;
})

// console.log(frutasMap)


//METODO FILTER

let frutasFilter = frutas.filter((x) => {
    return x !== 'Banana';
})

// console.log(frutasFilter)

//DESESTRUCTURACION DE ARREGLOS
let numeros = [1,2,3,4,5,6]

console.log(numeros[0])

let [ a, b, c, d, e, f ] = numeros;

console.log(a);
