/*

    const http=require('http');

    http.createServer(function(req, res){
        res.end("Gerenciador Financeiro");

    }).listen(3030);

*/

    const express = require("express");
    const app = express();
        app.get("/",function(req,res){
            res.send("Gerenciador Financeiro");
        });
        app.get("/sobre-empresa",function(req,res){
            res.send("Pagina Sobre Empresa");
        });
        app.get("/blog",function(req,res){
            res.send("Pagina do Blog");
        });
        app.get("/contato",function(req,res){
            res.send("Pagina de contato");
        });



    //localhost:3030
    app.listen(3030);// outra forma de instanciar um servidor
