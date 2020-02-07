const express = require('express');
const rutas = express.Router();
const controladorescliente = require('../controladores/controladorescliente');

rutas.get('/', controladorescliente.list);
rutas.post('/add', controladorescliente.guardardatos);
rutas.get('/delete/:id', controladorescliente.eliminardatos);//:id parametro que pasa con la ruta
rutas.get('/update/:id', controladorescliente.editardatos);//:id parametro que pasa con la ruta
rutas.post('/update/:id', controladorescliente.actualizardatos);//:id parametro que pasa con la ruta
module.exports = rutas;