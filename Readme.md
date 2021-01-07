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
$ npm install ejs --save
$ npm install nodemon -g
```

## Docker run
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 --name node-container node:15 bash