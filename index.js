const express = require('express')
const app = express()
const port = 3000
const mvc = require('./src/models/mvc')

const exercicioRoutes = require('./src/routes/exercicio.js');
const exercicio2Routes = require('./src/routes/exercicio2.js');
const mvcRoutes = require('./src/routes/mvc.js');

new mvc() 

app.use(express.json())
app.use(exercicioRoutes, exercicio2Routes, mvcRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})