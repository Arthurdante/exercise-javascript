const express = require('express')
const ControllerExercicio = require('../controllers/exercicio')

const controller = new ControllerExercicio()
const router = express.Router()
router.post('/api/exercicio1', controller.Somar)
router.post('/api/exercicio2', controller.Multiplicar)
router.post('/api/exercicio3', controller.Media5)
router.post('/api/exercicio4', controller.Celsiofahrenheit)
router.post('/api/exercicio5', controller.Quilometrosmilha)
router.post('/api/exercicio6', controller.Segundorelogio)
module.exports = router