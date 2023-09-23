const Cachorro = require("../models/dog.js")

const cachorros = new Array()

class Repositoriomvc {

    PegarUm(index) {
        return cachorros[index]
    }

    PegarTodos() {
        return cachorros
    }

    Adicionar(nome) {
        return cachorros(nome)
    }
    Alterar(index, nome) {
        return cachorros[index] = nome
    }
    Deletar(index) {
        return cachorros.splice(index, 1)
    }
}
module.exports = Repositoriomvc