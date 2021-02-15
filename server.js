const express = require('express');
const {body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./connect.js')

app.use(express.json());

//teste
app.get('/', (req, res) => {
    console.log("Request Arrived!")
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log("Servidor a correr na porta " + port)
})

app.get('/', function (req,res) {
    res.send('Já sei programar ');
});
app.get('/help', function (req,res) {
    res.send('não ha nada para ver ');
});


