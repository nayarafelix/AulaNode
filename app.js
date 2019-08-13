var app = require('./config/server');
var msg = require('./modulo_teste');

var rotaHome = require('./app/routes/home')(app);
var rotaLista = require('./app/routes/lista')(app);
var rotaProdutos = require('./app/routes/produtos')(app);
var rotaCadastrar = require('./app/routes/cadastrar')(app);

app.listen(2000, function(){
    console.log(msg());
});