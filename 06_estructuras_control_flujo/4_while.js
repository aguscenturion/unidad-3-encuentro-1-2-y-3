let edad = 0;

//mientras
while (edad < 18) {
    //codigo a repetir
    console.log("sos menor")
    edad++
    if (edad === 2){
        console.log('listo ya esta sali')
        break;
    }
}

console.log('Listo ya esta sos mayor')