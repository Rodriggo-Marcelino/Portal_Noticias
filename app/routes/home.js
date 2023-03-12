// rota para a pagina principal home
module.exports = function(app){
    app.get('/' , function(req, res){
        res.render("home/index");
    });    
}
