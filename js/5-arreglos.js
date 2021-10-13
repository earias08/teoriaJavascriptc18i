// crear un arreglo con datos
let series = ['Juego del calamar', "Loky", "Frozen", 2, true];

// crear un arreglo vacio
let temporadas = []; 

// mostrar un valor de un arreglo
document.write(series[0]);
//contar cuantos elementos tiene el arreglo
console.log(series.length);

//recorrer elemento por elemento un arreglo
for(let posicion = 0; posicion < series.length ; posicion++ ){
    document.write('<br>'+ series[posicion]);
}

// agregar un elemento al final del arreglo
series.push('Breaking bad');

document.write('<br><br><b>Arreglo series con nuevo elemento</b><br>');

for(let posicion = 0; posicion < series.length ; posicion++ ){
    document.write('<br>'+ series[posicion]);
}

// agregar un elemento en una posicion particular
series.splice(1, 0,'GOT'); //(posicion del elemento, cantidad de elementos a borrar, el elemento que quiero agregar)

document.write('<br><br><b>agregar un elemento en una posicion particular</b><br>');

for(let posicion = 0; posicion < series.length ; posicion++ ){
    document.write('<br>'+ series[posicion]);
}

// eliminar un elemento del arreglo
series.splice(5,1); //(posicion del elemento, cantidad de elementos a borrar)
// series.splice(4); //(posicion del elemento desde el que quiero eliminar, el resto hacia la derecha)
mostrarArreglo('eliminar un elemento de una posicion particular del arreglo')

// modificar un valor del arreglo
series[4] = 'friends';
mostrarArreglo('modificar un valor del arreglo')

function mostrarArreglo(titulo){
    document.write('<br><br><b>'+titulo+'</b><br>');

    for(let posicion = 0; posicion < series.length ; posicion++ ){
        document.write('<br>'+ series[posicion]);
    }
}



