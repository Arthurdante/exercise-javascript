const servicomvc = require('../services/mvc')

const servico = new servicomvc()

class controllermvc{
    PegarUm(req, res){
        try {
            const result = servico.PegarUm(req.params.index)
            res.status(200).json({ 
                nome: result 
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }
    PegarTodos(req, res){
        try {
            const result = servico.PegarTodos()
            res.status(200).json({ 
                nomes: result
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    Adicionar(req, res){
        try {
            const result = servico.Adicionar(req.body.nome)
            res.status(200).json({ 
                message: "Nome adicionado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    Alterar(req, res){
        try {
            servico.Alterar(req.params.index, req.body.nome)
            res.status(200).json({ 
                message: "Nome alterado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    Deletar(req, res){
        try {
            servico.Deletar(req.params.index)
            res.status(200).json({ 
                message: "Nome deletado com sucesso",
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = controllermvc