// const edad = 18;

//condicion simple if / else
//evaluar si una persona es mayor de edad o no.
if (edad >= 18) {
    //el codigo a ejecutar si la condicion es verdadera
    console.log('Eres mayor de edad')
} else {
    //el codigo a ejecutar si la condicion es falsa
    console.log('Eres menor de edad')
}

const edad = 25;
//condicion compleje if/else if
if (edad >= 18 && edad <=30) {
    console.log('estas en el rango adecuado')
} else if(edad < 18){
    console.log('sos menor de edad')
}else{
    console.log('te pasaste de los 30')
}