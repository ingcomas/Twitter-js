const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const socketio = require('socket.io');



app.use('/', routes(io));
app.use(express.static('./public'));

app.use(function(req,res,next){// logging Middlewere de url y método
    console.log('url: '+req.url,'\tMetodo: '+req.method);
    next();
});

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views',{noCache:true}); // apunta a nunjucks al directorio correcto para los templates

var server = app.listen(3000);
var io = socketio.listen(server);// Espera un request por puerto 3000


// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get('/special',function(req,res,next){
    //     res.send('<h1>Es un lugar muuuuuy especial</h1> <br> <h3>si no me creés, preguntale a franche</h3> <br> <a href="https://www.youtube.com/watch?v=NgALKLCswi0"> Mirá este video</a>');
        
    //     next();
    // })
    // app.get('/fama',function(req,res,next){
    //     res.render( 'index', {title: 'Hall of Fame', people: people} );
    
    // })