// funciones sin parametro
function saludar(){
    // todo el codigo que quiero que tenga la funcion
    document.write('hola mundo');
}

//funciones con parametros
function saludo(nombre, apellido){
    let edad;
    document.write('<br>Hola mi nombre es: '+ nombre +' y mi apellido es '+ apellido);
}

// funciones que retornan un valor
// function convertirDolaresAPesos(dolares){
//     let pesosFinales = dolares * 185;
//     // el return es la ultima linea de codigo de una funcion
//     console.log(pesosFinales);
//     return pesosFinales;
// }

// funciones en forma de flecha =>
let convertirDolaresAPesos = (dolares) => {
    let pesosFinales = dolares * 185;
    // el return es la ultima linea de codigo de una funcion
    console.log(pesosFinales);
    return pesosFinales;
}



// invocar o llamar a una funcion
saludar();

let nombreSolicitado = prompt('Ingrese un nombre');
let apellidoSolicitado = prompt('Ingrese un apellido');

saludo(nombreSolicitado, apellidoSolicitado);
saludo('Mercado', 'Alejandro');

let pesos = convertirDolaresAPesos(1000);

document.write('<br>Producto: Iphone X $'+pesos);
document.write('<br>Producto: xiami redmi note 9 pro, $'+convertirDolaresAPesos(300));

