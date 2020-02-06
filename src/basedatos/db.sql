-- creando la base de datos

CREATE DATABASE crudnode;

-- usando la base de datos

use crudnode;

-- Creando tablas

Create TABLE cliente (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL
);

--  Para mostrar las tablas

SHOW TABLES;

-- Para describir las tablas

describe cliente;