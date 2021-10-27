// crear una clase
// nombre, apellido, email, edad, direccion, fotoPerfil, dni
class Persona{
    // primer metodo a crear y su mision es crear el objeto
    constructor(paramNombre, apellido, email, edad, direccion, fotoPerfil, dni){
        this.fotoPerfil = fotoPerfil
        this.nombre = paramNombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.direccion = direccion;
        this.dni = dni;
        this.estado = true; //parametro por defecto
    }

    // agregar los metodos
    mostrarDatos(){
        // document.write('<br>Nombre: '+ this.nombre +'<br>Apellido'+ this.apellido)
        document.write(`<br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Email: ${this.email}
        <br>Edad: ${this.edad}
        <br>Direccion: ${this.direccion}
        <br>DNI: ${this.dni}`)
    }

    calcularFechaNacimiento(){

    }
    mostrarResumen(){
        
    }

    // crear las propiedades conmutadas get y set
    // muestran una propiedad
    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarApellido(){
        return this.apellido;
    }
// modifican una propiedad
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set modificarApellido(nuevoApellido){
        this.apellido = nuevoApellido;
    }

}

// herencia
class Alumno extends Persona {
    // primer metodo de una clase
    constructor(apellido, paramNombre, email, edad, direccion, fotoPerfil, dni, curso, legajo){
    //    invoco al constructor de la clase persona
        super(paramNombre,apellido,email, edad, direccion, fotoPerfil, dni);
        // agregar las nuevas propiedades
        this.curso = curso;
        this.legajo = legajo;
        this.calificaciones = [];
    }

    get mostrarLegajo(){
        return this.legajo;
    }

    // mostrarDatos(){
    //     document.write(`<br>Nombre: ${this.nombre}
    //     <br>Apellido: ${this.apellido}
    //     <br>Email: ${this.email}
    //     <br>Edad: ${this.edad}
    //     <br>Direccion: ${this.direccion}
    //     <br>DNI: ${this.dni}
    //     <br>Curso: ${this.curso}
    //     <br>Legajo: ${this.legajo}`)
    // }

    mostrarDatosAlumno(){
        document.write(`<br>Curso: ${this.curso}
        <br>Legajo: ${this.legajo}`)
    }
}


// declarar variables
// crear el arreglo
let listaPersonas = [];

// como crear un objeto, crear instanciar
let luciana = new Persona('Luciana','Medina','lmedina@gmail.com', 25, 'aqui va la direccion','url', 39888999);
console.log(luciana);

let axel = new Persona('Axel', 'Campo','acampo@gmail.com', 23,`una direccion aleatoria`,'otra url', 39666777);

// guardar los objetos dentro del arreglo
listaPersonas.push(luciana);
listaPersonas.push(axel);

console.log(listaPersonas);
// usar los metodos de la clase persona

// luciana.mostrarDatos();
// axel.mostrarDatos();

for(let i =0; i< listaPersonas.length; i++){
    console.log(listaPersonas[i])
    listaPersonas[i].mostrarDatos();
}

// modificar una propiedad del objeto
// luciana.direccion = 'nueva direccion'; mala practica

document.write(`<h6>Apellido: ${axel.mostrarNombre} ${axel.mostrarApellido} </h6>`)

luciana.modificarNombre = 'Lu';

document.write(`<h6>Apellido: ${luciana.mostrarNombre} ${luciana.mostrarApellido} </h6>`)

// crear un objeto de la clase alumno
let ramiro = new Alumno('Perez', 'Ramiro','rperez@gmail.com', 25, 'alguna direccion', 'alguna url', 37444555, 'FullStack', 123);

document.write('<br>'+ ramiro.mostrarLegajo)

ramiro.mostrarDatos();
ramiro.mostrarDatosAlumno();