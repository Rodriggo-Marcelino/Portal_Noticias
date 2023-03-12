// rota para inclusao de noticia 
module.exports = function(application){
    application.get('/admin' , function(req, res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar' , function(req, res){
        var noticia = req.body;

        var connection = application.config.dbConection();
        var noticiasModel = new application.app.models.noticiasModel(connection);
            
            noticiasModel.salvarNoticias(noticia, function(error, result){
                res.redirect('/noticias');
             });
      
        // enviar para uma função de salvar noticia 
    
    });
}

