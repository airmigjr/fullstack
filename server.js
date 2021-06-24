const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const PORT = process.env.PORT;

const api = require('./backend/routes');

// console.log("Nome do banco de dados do MongoDB", process.env.MONGO_DB);
// console.log("Nome do usuário no MongoDB", process.env.MONGO_USER);


// app.get('/', (req, res) => {
//     res.json({
//         'success': true
//     });
// });

app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
  //Express vai entregar os assets de produção, como por exemplo o main.js ou o main.css
  app.use(express.static('frontend/build'));


  //Express vai entregar o index.html, se não reconhecer a rota
  const path = require('path')
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })

}

app.listen(PORT);