// declaro variables
let numero1 = parseInt(prompt('Ingrese un primer numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));

console.log(numero1); //50
console.log(numero2); //30

/* Estructura if
if(condicion logica && condicion logica ){
    todas las lineas de codigo que quiera que haga mi programa si la condicion es verdadera
}else{
    todas las lineas de codigo que quiero que haga el programa si la condicion es falsa
}

*/ 

if(numero1 > numero2){
    document.write('El primer numero es el mas grande '+ numero1);

}else{
    if(numero1 == numero2){
        document.write('los numeros son iguales '+ numero2);
    }else{
        document.write('El segundo numero es el mas grande '+ numero2);
    }
}