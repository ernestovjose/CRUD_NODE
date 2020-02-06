// Solicitamos express y lo asignamos a una variable
const express = require('express');
const servidor = express();
// Solicitamos el modulo path para poder concatenar los directorios y asignar la carpeta donde estaran las vistas 
// si las vistas no estuvieran en su carpeta este paso se omitiria
const path = require('path'); 
// Solicitamos al modulo morgan para porder leer que peticiones o acciones odurren en el servidor
const morgan = require('morgan');
//solicitamos el modulo de mysql y el de conexion para la base de datos
const mysql = require('mysql');
const myConnection = require('express-myconnection')


// Ajustes

servidor.set('port', process.envPORT || 3000); //permite elegir entre el puerto asignado por el pc o el 3000 por defecto
servidor.set('view engine', 'ejs'); // aqui definimos quien es el motor de las vistas osea de html
servidor.set('views', path.join(__dirname, 'vistas')); // indicamos donde esta la carpeta vistas donde se pondra el html

// Middleware funciones del servidor
servidor.use(morgan('dev')); //se utilizara para mostrar mensajes en consola sencillos
servidor.use(myConnection(mysql, {
    host: 'Localhost',
    user: 'root',
    password: '21248879',
    port: 3306,
    database: 'crudnode'
}, 'single')) 

// Rutas a donde se direccionaran las acciones

// Ejecucuion del servidor
servidor.listen(servidor.get('port'), () => {
    console.log('servidor en el puerto 3000');
});