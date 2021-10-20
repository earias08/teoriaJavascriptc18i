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
}

// como crear un objeto, crear instanciar
let luciana = new Persona('Luciana','Medina','lmedina@gmail.com', 25, 'aqui va la direccion','url', 39888999);
console.log(luciana);

let axel = new Persona('Axel', 'Campo','acampo@gmail.com', 23,`una direccion aleatoria`,'otra url', 39666777);

// usar los metodos de la clase persona
luciana.mostrarDatos();
axel.mostrarDatos();