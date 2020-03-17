const express = require( 'express' );
const chalk = require( 'chalk' );


const app = express();
const port = 3000;

// Una ruta se declara de la siguiente manera:
// app.METHOD( PATH, HANDLER )
//app es una instancia de Express
//.METHOD es un método de solicitud HTTP (CRUD: CREATE, READ, UPDATE, DELETE)
// PATH es la ruta del servidor
// HANDLER es la función que se ejecuta cuando se reconoce la ruta

app.get( '/', ( request, response ) => {
    response.send('Welcome to Express');
});



app.listen( port, (error) => {
    if (error) {
        throw new Error ('Something is happend...');
    }

    console.log(chalk.green.inverse.bold(`Server is listening on ${port}`)); 
});

// Las rutas PATH pueden tener varias formas:

//Solicitud: es el objeto HTTP de la solicitud enviada al servidor por el cliente.
//Contiene info como: encabezado HTTP, los parámetros enviados, los datos de un formulario, los parámetros de URL, y otros...

//Respuesta: representa el objeto HTTP de la solicitud enviada por el servidor al cliente.
//Puede contener: datos, un mensaje (validación, error) o simplemente un estado correspondiente al estado de la solicitud procesada por el servidor.

//res.send permite enviar datos (String, Object, Array, Buffer)

app.get( '/api/movies', ( request, response ) => {
    response.send('All films');
});

// res.json para enviar un objeto en formato JSON

app.get( '/api/movies/:id', (request, response) => {
    response.json({id: 'Wonder Woman'});
});

//res.sendStatus permite enviar solo el estado de la solicitud

app.get( '/api/employee', (request, response) => {
    response.sendStatus ( 304 ); 
});

//res.status permite adjuntar un mensaje de estado en la respuesta. Usualmente está combinado con "send"

app.get('/api/employee/name=leire', (request, response) => {
    response.status(404).send('Unable to retrieve employee');
  });