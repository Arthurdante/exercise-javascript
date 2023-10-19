const Repositoriomvc = require('../repositories/mvc')


const repositorio = new Repositoriomvc

class servicomvc {
    PegarUm(index) {
        return repositorio.PegarUm(index)
    }
    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }

    PegarTodos() {
        return repositorio.PegarTodos()
    }

    Adicionar(nome) {
        if(!nome){
            throw new Error("Favor peencher o nome")
        }
        return repositorio.Adicionar(nome)
    }
    Alterar(index, nome) {
        if(!nome){
            throw new Error("Favor peencher o nome")
        }else if(!index || isNaN(index)){
            throw new Error("Favor informar um index válido")
        }
        return repositorio.Alterar(index, nome)
    }
    Deletar(index) {
        return repositorio.Deletar(index)
    }
    Login(){
        
    }
}
module.exports = servicomvc