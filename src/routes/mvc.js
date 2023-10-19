const express = require("express")
const Controllermvc = require("../controllers/mvc.js")
const authMiddleware = require('../middleware/auth')

const controller = new Controllermvc()
const router = express.Router()

router.post('/api/login', controller.Login)
router.get('/api/nome/:index', authMiddleware, controller.PegarUm)
router.get('/api/nome', authMiddleware, controller.PegarTodos)
router.post('/api/nome', authMiddleware, controller.Adicionar)
router.put('/api/nome/:index', authMiddleware, controller.Alterar)
router.delete('/api/nome/:index', authMiddleware, controller.Deletar)
module.exports = router