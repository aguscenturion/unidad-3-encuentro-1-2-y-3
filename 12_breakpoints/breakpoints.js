//VER ESTE ARCHIVO DESDE LA CONSOLA DE DESARROLLADOR DEL NAVEGADOR EN LA PARTE DE SOURCE

function fecha(){
    let hoy = new Date()
    let dia = hoy.getDate();
    let anio = hoy.getFullYear()
    let mes = hoy.getMonth();

    //                0       1           2        3       4          5      6        7
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


    console.log(`El dia es ${dia} de ${meses[mes]} de ${anio}`)

}

fecha()