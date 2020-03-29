const express = require('express');
const cors = require('cors');/** Pacote de segurança, 
quem vai poder acessar a aplicação */
const routes = require('./routes'); /* passamos as rotas para um arquivo routes.js
 para nao ficar as rotas todas no nosso index.js*/
const app = express();


app.use(cors());
app.use(express.json()); /* informando qual será o formato 
de requisição que deverá ser interpretada*/
app.use(routes);

/* Para não precisar ficar reiniciando o servidor pelo 
terminal toda vez que salvar uma alteração na aplicação
podemos instalar um pacote com o comando
npm install nodemon -D (esse -D quer dizer que será 
utilizado o pacote só enquanto desenvolvemos a aplicação, quando 
colocarmos ela online não tem necessidade de ficar monitorando o código)

*/


 /*
 BANCO DE DADOS A SER UTILIZADO SERÁ O SQLite
 Driver: SELECT * FROM users
 Query Builder: table ('users').select('*').where() : vantagem é que pode-se migrar
a aplicação de banco de dados SQL facilmente depois.

 */

app.listen(3333);



