const ServicoExercicio2 = require("../services/exercicio2")

const servico = new ServicoExercicio2()

class ControllerExercicio2 {
    Operacao(req, res){
        try {
            const result = servico.Operacao(req.body.operacao, req.body.num1, req.body.num2)
            res.status(200).json({ 
                mensage: `O seu imc é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Posiounega(req, res){
        try {
            const result = servico.Posiounega(req.body.num1)
            res.status(200).json({ 
                mensage: `O numero ${req.body.num1} é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Parouimpar(req, res){
        try {
            const result = servico.Parouimpar(req.body.num1)
            res.status(200).json({ 
                mensage: `O numero ${req.body.num1} é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Maiorque(req, res){
        try {
            const result = servico.Maiorque(req.body.num1, req.body.num2)
            res.status(200).json({ 
                mensage: `O resultado é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Triangulo(req, res){
        try {
            const result = servico.Triangulo(req.body.a, req.body.b, req.body.c, req.body.base, req.body.altura)
            res.status(200).json({ 
                mensage: `${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Impostoderenda(req, res){
        try {
            const result = servico.Impostoderenda(req.body.cpf, req.body.dependentes, req.body.salario)
            res.status(200).json({ 
                mensage: `O seu imposto de renda é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Mediaponderada(req, res){
        try {
            const result = servico.Mediaponderada(req.body.num1, req.body.num2, req.body.num3)
            res.status(200).json({ 
                mensage: `Você foi ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Valorcarro(req, res){
        try {
            const result = servico.Valorcarro(req.body.valordefabriva)
            res.status(200).json({ 
                mensage: `Valor de fabrica é ${req.body.valordefabriva} e o valor final é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Juros(req, res){
        try {
            const result = servico.Juros(req.body.dias, req.body.taxa, req.body.capital)
            res.status(200).json({ 
                mensage: `Sendo a taxa ${req.body.taxa}% com o capital de ${req.body.capital}R$ o juros final é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
}
module.exports = ControllerExercicio2

//   app.post("/api/exercicio19", (req, res) => {
//     const pecas = [req.body.ipi, req.body.codpeca1, req.body.valorunipeca1, req.body.quantpeca1, req.body.codpeca2, req.body.valorunipeca2, req.body.quantpeca2]
//     const result = valoripi(pecas)
//     res.status(200).json(`
//     • O código da peça ${req.body.codpeca1}, valor unitário da peça ${req.body.valorunipeca1}, quantidade de peças ${req.body.quantpeca1}
//     • O código da peça ${req.body.codpeca2}, valor unitário da peça ${req.body.valorunipeca2}, quantidade de peças ${req.body.quantpeca2}
//     • O valor total é ${result}
//     `
//     )
//   })