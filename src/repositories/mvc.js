const nomes = new Array("Pedro", "beto", "maria")

class Repositoriomvc {

    PegarUm(index) {
        return nomes[index]
    }
    
    async PegarUmPorEmail(email) {
        return Pessoa.findOne({
            where: { email }
        });
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
    Login(){

    }
}
module.exports = Repositoriomvc