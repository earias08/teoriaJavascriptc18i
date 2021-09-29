// document.write('Elemento 1<br>');
// document.write('Elemento 2<br>');
// document.write('Elemento 3<br>');
// document.write('Elemento 4<br>');
// document.write('Elemento 5<br>');
// document.write('Elemento 6<br>');

// while
/*while(condicion logica){
todas las lineas de codico que quiero que se repitan
cambiar la condicion logica
}
*/

// let contador = 1;

// while(contador <= 50){
//     document.write('Elemento '+ contador +'<br>');
//     contador++;  //contador = contador + 1;
// }


// do-while hacer ... mientras (se cumple la condicion logica)
/*
    do{
        todas las lineas de codigo a ejecutar
        cambiar la condicion
    }while(condicion logica)
*/

// let cont = 20;
// do{
//     document.write('Elemento '+ cont +'<br>');
//     cont--; //cont = cont - 1;
// }while(cont >= 1)


// for funciona igual a un while

/* for(inicializamos una variable; condicion logica; incrementar o decrementar el contenido de la variable){
    ...
}*/

for(let indice = 1; indice <= 100; indice= indice + 1 ){
    document.write('Elemento '+ indice +'<br>');
};