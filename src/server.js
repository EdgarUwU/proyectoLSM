const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

const indexHtmlPath = path.join( __dirname, './views/index.html' );

const PORT = process.env.PORT || '3001';

app.use( express.static( path.join( __dirname, './' ) ) );
app.use( express.json() );
app.use( cors({
    origin: 'http://localhost:3001/'
}));


app.get( '*', ( req, res ) => {
    res.sendFile( indexHtmlPath );
});


app.listen( PORT, () => {
    console.log( `Server encendido en puerto ${ PORT }` );
    console.log( `http://localhost:${ PORT }` );
});