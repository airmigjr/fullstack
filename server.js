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


app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.use('/api', api);

app.listen(PORT);