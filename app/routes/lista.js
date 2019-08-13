module.exports = function (app) {
    app.get('/lista', function(req, res){
        res.render('produtos/lista');
    });
}