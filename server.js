const express = require('express');
const {body, validationResult } = require('express-validator');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log("Servidor a correr na porta " + port)
})

// tenho de ligar a base de dados ao site
