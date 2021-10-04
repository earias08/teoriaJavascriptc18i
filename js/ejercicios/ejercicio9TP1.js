let frase = prompt('Ingrese una frase'); //hola MUndo

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(1));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

frase = frase.toLowerCase();


// recorrer la frase con un bucle, el fin de mi bucle frase.length

//if preguntar si cada caracter es una vocal (frase.charAt(X) == 'a' || frase.charAt(X) == 'e' || condicion logica)

// mostrar un document.write( frase.charAt(X))

for(let i=0; i < frase.length; i = i + 1){
    if(frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o' || frase.charAt(i) == 'u' || frase.charAt(i) == 'á' ){
        document.write(frase.charAt(i));
    }

}

