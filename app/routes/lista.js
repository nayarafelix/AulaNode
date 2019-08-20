module.exports = function (app) {
    app.get('/lista', function(req, res){

        var connection = app.config.dbConnection();

        connection.query('SELECT * FROM produto', function(error, result){
            res.render('produtos/lista', {produtos : result});
        });

    });
}