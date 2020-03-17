// Objetivo: vincular una solicitud del cliente con los datos presentes en la BD

const express = require( 'express' );
const chalk = require( 'chalk' );
const mysql = require( 'mysql' );

// IMPORTAR la configuración mysql
const connection = require('./config.js');

const app = express();
const port = 3000;

// Una ruta se declara de la siguiente manera:
// app.METHOD( PATH, HANDLER )
//app es una instancia de Express
//.METHOD es un método de solicitud HTTP (CRUD: CREATE, READ, UPDATE, DELETE)
// PATH es la ruta del servidor
// HANDLER es la función que se ejecuta cuando se reconoce la ruta

app.get ( '/' , (request, response) => { 
    response.send ( 'Wellcome to Express' ); 
  });

app.listen( port, (error) => {
    if (error) {
        throw new Error ('Something is happend...');
    }

    console.log(chalk.green.inverse.bold(`Server is listening on ${port}`)); 
});

// Crear ruta para obtener datos

/* Cuando un user sondea el servidor, http://localhost/api/employee, debe poder recuperar a todos los empleados y enviarlos de vuelta al cliente */


app.get('/api/employee', (request, response) => {
    //TODO get data (step 2)

    // Con la consulta SELECT de SQL puedo recuperar esta información.

    //Si se produce un error durante la solicitud, habrá una descripción en la variable error y puedo enviar un mensaje al user para advertirle

    //Si todo va bien, el resultado de la consulta SQL se almacenará en la variable results
    connection.query('SELECT * from employee', (error, results) => {
        // TODO Send the data (step 3)

        //Hay muchas soluciones para manejar errores: enviar una excepción o un estado con un mensaje de error genérico.

        //Si la consulta se ha ejecutado correctamente, los datos se devuelven en formato JSON.

        if (error){
            response.status(500).send(console.log(chalk.red.inverse('error')));
        }else {
            response.json(results);
        }
        
    });
});


