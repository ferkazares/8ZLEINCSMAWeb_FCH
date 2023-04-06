/*var colors = require('colors');
//con esto podemos realizqar una instancia para poder manejar el
//objeto de acuerdo a poo.

let contacto ={"nombre" : "Fernanda", "Email" : "ferkazares.015@gmail.com", "Edad" : "21"};

console.log(contacto.nombre.green);
console.log(contacto.Email.bgMagenta); 

var prueba = require('./function');
//con esto ya podemos mandar a llamar los metodos que se han programado en la otra
// por asi llamarle "clase"

prueba.suma(7,8);
prueba.resta(5,3);*/

var http = require('http');
//crearemos nuestro propio servidor

var servidor = http.createServer
    (function (request, response) {
        //el tipo de respuesta que nos debe de obtener por
        //parte del servidor debe ser en formato html

        response.writeHead(200,
            { 'Content-Type': 'text/html; charset=utf-8' });
        response.write('<h2>Hola mundo magico</h2>');

        console.log('Se hizo una peticion web');
        response.end();
    });

//Falta mandar a llamar el puerto mediante el cual se van a atender las peticiones x parte del cliente
    
        servidor.listen(3000);

//para ejecutar las peticiones se deben hacer desde el navegador, para ello vamos a visualizar
//elementos a traves del localhost:3000

console.log('Ejecuntando el servidor local en el puerto 3000');
// vamos a atender de forma automatica las peticiones, para ello se debe instalar un paquete 
//nodemon npm install nodemon -g