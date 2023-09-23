const express = require("express")
const Controllermvc = require("../controllers/mvc.js")

const controller = new Controllermvc()
const router = express.Router()

router.get('/api/nome/:index', controller.PegarUm)
router.get('/api/nome', controller.PegarTodos)
router.post('/api/nome', controller.Adicionar)
router.put('/api/nome/:index', controller.Alterar)
router.delete('/api/nome/:index', controller.Deletar)
module.exports = router