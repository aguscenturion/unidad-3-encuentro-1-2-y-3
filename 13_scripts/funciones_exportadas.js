// PARA USAR EXPORT E IMPORT AGREGAR EN EL SCRIPT DE HTML EL ATRIBUTO type="module"

export function sumar(num1 = 0, num2= 0){
    let suma = num1 + num2;
    console.log('La suma desde la funcion externa es', suma)
}

export function restar(num1 = 0, num2= 0){
    let resta = num1 + num2;
    console.log('La resta desde la funcion externa es', resta)
}

