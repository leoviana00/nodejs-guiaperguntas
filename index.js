const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get("/", (req, res) =>{
    res.send({
        "Titulo":"Guia de perguntas", 
        "Versão": "0.1.0",
        "Status": "UP!"
    });
})

app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) =>{
    res.send("Formulário recebido!");
})

//app.get("/:nome/:lang", (req, res) => {
    // var nome = req.params.nome;
    // var lang = req.params.lang;
// app.get("/", (req, res) => {
//     var nome = "Leonardo Viana";
//     var lang = "Javascript";
//     var exibirMsg = true;

//     var produtos = [
//         {nome: "Doritos", preco: 3.14},
//         {nome: "Coca-cola", preco: 5},
//         {nome: "Leite", preco: 1.45},
//         {nome: "Carne", preco: 15.45},
//         {nome: "Redbull", preco: 6.45},
//         {nome: "Nescau", preco: 7.00}
//     ]

//     res.render("index",{
//         nome: nome,
//         lang: lang,
//         empresa: "Guia do programador",
//         msg: exibirMsg,
//         produtos: produtos
//     })
// })

app.listen(port, (erro) => {
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
});