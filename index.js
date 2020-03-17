const express = require( 'express' );
const chalk = require( 'chalk' );


const app = express();
const port = 3000;

app.get( '/', ( request, response ) => {
    response.send('Welcome to Express');
});

app.listen( port, (error) => {
    if (error) {
        throw new Error ('Something is happend...');
    }

    console.log(chalk.green.inverse.bold(`Server is listening on ${port}`)); 
});

app.get( '/api/movies', ( request, response ) => {
    response.send('All films');
});

app.get( '/api/movies/:id', (request, response) => {
    response.json({id: 'Wonder Woman'});
});

app.get( '/api/employee', (request, response) => {
    response.sendStatus ( 304 ); 
});

app.get('/api/employee/name=leire', (request, response) => {
    response.status(404).send('Unable to retrieve employee');
  });
