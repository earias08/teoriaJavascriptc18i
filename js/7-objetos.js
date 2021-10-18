// let email = 'jonyplo@gmail.com';
// let nombre = 'jony plodzien';
// let domicilio = 'direccion de jony';
// let localidad = '4000';
// let password = 'A123&456'

// crear un objeto con notacion literal
let usuarioJony = {
    // propiedades-> clave:valor 
    localidad: '4000',
    email: 'jonyplo@gmail.com',
    nombre: 'jony plodzien',
    domicilio: 'direccion de jony',
    password: 'A123&456',
    estado: true,
    // metodos o funciones
    // login: function () {
    //     document.write('<br>Usuario logueado');
    // }
    login: ()=>{
        document.write('<br>Usuario logueado');
    }
}

// mostrar un objeto
console.log(usuarioJony);

// mostrar el objeto 1er forma
document.write('Email: '+ usuarioJony.email);
document.write('<br>localidad: '+ usuarioJony.localidad);

// mostrar el objeto 2da forma
document.write('<br>Nombre: '+ usuarioJony['nombre']);

// modificar una propiedad del objeto
usuarioJony.localidad = '2000';
document.write('<br>localidad: '+ usuarioJony.localidad);

//agregar una nueva propiedad
usuarioJony.nivel = 1;
document.write('<br>Nivel: '+ usuarioJony.nivel);

// Borrar una propiedad de un objeto
delete usuarioJony.estado;

// usar un metodo
usuarioJony.login();
