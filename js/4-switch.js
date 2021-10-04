let estacion = prompt('Ingrese su estacion del año preferida: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera');

// if( estacion == '1'){
//     document.write('Sandia');
// }else if(estacion == '2'){
//     document.write('Churros');
// }else if(estacion == '3'){
//     document.write('Guiso/Pastas');
// }else if(estacion == '4'){
//     document.write('Cerveza');
// }else{
//     alert('ingreso una opcion erronea');
// }

/*
switch(opcion){
    case '1':
        todas las lineas de codigo
        break;
    case '2':
        todas las lineas de codigo
        break;
    case '3':
        todas las lineas de codigo
        break;
    default:
        todas las lineas de codigo que quiero ejecutar si es una opcion diferente a los case anteriores
}
*/

switch(estacion){
    case '1':
    case 'verano':
    case 'Verano':
        document.write('Sandia');
        break;
    case '2':
        document.write('Churros');
        break;
    case '3':
        document.write('Guiso/Pastas');
        break;
    case '4':
        document.write('Cerveza');
        break;
    default:
        alert('Opcion erronea');
}

console.log( confirm('¿Desea continuar?') )
/*
do{
    .....
}while(confirm('¿Desea continuar?'))
*/