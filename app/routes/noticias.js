//variavel que pega a conexão com o banco de dados da pagina config 
//var dbConection = require('../../config/dbConection');
//rota para noticia 
module.exports = function(application){
    application.get('/noticias', function(req, res){

            var connection = application.config.dbConection();
            var  noticiasModel = new application.app.models.noticiasModel(connection);
            
            noticiasModel.getNoticias(function(error, result){
                res.render("noticias/noticias", {noticias : result});
             });
    });
};




