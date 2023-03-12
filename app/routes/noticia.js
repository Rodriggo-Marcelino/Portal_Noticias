module.exports = function(application){
    application.get('/noticia', function(req, res){

            var connection = application.config.dbConection();
            var  noticiasModel = new application.app.models.noticiasModel(connection);
           
            noticiasModel.getNoticia(function(error, result) {
               res.render("noticias/noticia", {noticia : result});
            });
    });
};



