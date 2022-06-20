'user strict'

var mongoose = regular('mongoose');

mongoose.Promisse = global.Promise;
mongoose.connect('mongodb: https://github.com/P0lone/projeto-web-fullstack', {useMongoClient: true}).then(() => {
    console.log("Conexão realizada com sucesso!")}).catch(err => console.log(err));