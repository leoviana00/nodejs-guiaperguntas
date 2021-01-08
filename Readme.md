# Project

Desenvolvimento de uma plataforma de perguntas e respostas

## Tecnologias

- nodejs
- express
- nodemon
- mysql
- ejs


## Instalação 
```
$ npm install express --save
$ npm install body-parser --save => Responsável por traduzir os dados enviados pelo formulário em uma estrutura js que a gnt consiga usar no backend
$ npm install nodemon -g
```

## Docker run
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 --name node-container node:15 bash