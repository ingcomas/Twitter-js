const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.use(function(req,res,next){// logging Middlewere de url y método
    console.log('url: '+req.url,'\tMetodo: '+req.method);
    next();
});
app.use('/special*',function(req,res,next){
    console.log('Accediste a un lugar especial');
    res.send('<h1>Es un lugar muuuuuy especial</h1> <br> <h3>si no me creés, preguntale a franche</h3> <br> <a href="https://www.youtube.com/watch?v=NgALKLCswi0"> Mirá este video</a>');

    next();
})

app.listen('3000');// Espera un request por puerto 3000