const express = require("express");
const app = express();
const port = 7070;

app.get("/home", function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contatos",function(req,res){
    res.sendFile(__dirname + "/src/contatos.html")
});

app.get("/formulario",function(req, res){
    res.sendFile(__dirname + "/src/formulario.html")
});

app.listen(port);