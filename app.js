var app = require('./config/server');

// criação da var apenas para caso precisse usar ela novamente, não é necessaria para funcionamento 

//var home = require('./app/routes/home')(app);
//var rota_noticias = require('./app/routes/form_inclusao_noticia')(app);
//var noticias = require('./app/routes/noticias')(app);


app.listen(3000, function(){
    console.log('server online');
});

