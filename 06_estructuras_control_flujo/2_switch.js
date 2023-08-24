const diaDeLaSemana = 'LUNES'

switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
        console.log('seleccionaste el dia lunes')
        break;
    case 'martes':
        console.log('seleccionaste el dia martes')
        break;
    case 'miercoles':
        console.log('seleccionaste el dia miercoles')
        break;
    case 'jueves':
        console.log('seleccionaste el dia jueves')
        break;
    case 'viernes':
        console.log('seleccionaste el dia viernes')
        break;
    case 'sabado':
        console.log('seleccionaste el dia sabado')
        break;
    case 'domingo':
        console.log('seleccionaste el dia domingo')
        break;
    default:
        console.log('No es ningun dia de la semana')
        break;
}