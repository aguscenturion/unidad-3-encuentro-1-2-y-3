const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    ciudad: "Buenos Aires",
    saludar: function(){
        console.log("Hola, soy "+ persona.nombre + " " + persona.apellido)
        console.log(`Hola soy ${persona.nombre} ${persona.apellido}`)
    }
}

console.log(persona.nombre)

//se puede reasignar el valor de los atributos
persona.apellido = 'Nuevo nombre'

// console.log(persona.apellido)

//DESESTRUCTURACION DE OBJETOS

const {nombre, edad} = persona;

console.log(nombre)



