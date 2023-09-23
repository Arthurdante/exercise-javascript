const nomes = new Array("Pedro", "beto", "maria")

class Repositoriomvc {

    PegarUm(index) {
        return nomes[index]
    }

    PegarTodos() {
        return nomes
    }

    Adicionar(nome) {
        return nomes.push(nome)
    }
    Alterar(index, nome) {
        return nomes[index] = nome
    }
    Deletar(index) {
        return nomes.splice(index, 1)
    }
}
module.exports = Repositoriomvc