//mandamos a llamar la libreria

var express = require('express');
//hacemos una referencia al constructor de objetos de express para que este tenga
//acceso a los metodos propios de la libreria

var app = express();

/* Una vez que se tiene el servidor inicializado debemos manejar 
rutas para atender las peticiones mediante los metodos
get, post, put, delete, patch.
*/

/* Creamos un objeto para el servidor mediante el uso de express*/
app.get('/', function(req, res){
    res.send('Ruta INICIO');
});
app.listen(3000, function(req, res){
    console.log('Servidor inicializado en el puerto 3000');
})