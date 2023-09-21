const ServicoExercicio = require("../services/exercicio")

const servico = new ServicoExercicio()

class ControllerExercicio {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Media5(req, res){
        try {
            const result = servico.Media5(req.body.pesopessoa1, req.body.pesopessoa2, req.body.pesopessoa3, req.body.pesopessoa4, req.body.pesopessoa5)
            res.status(200).json({ mensage: `A media das 5 pessoas é ${result}` })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Multiplicar(req, res){
        try {
            const result = servico.Multiplicar(req.body.valorhora, req.body.quantidadehoras)
            res.status(200).json({
                message: `O salario é ${result} reais`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Celsiofahrenheit(req, res){
        try {
            const result = servico.Celsiofahrenheit(req.body.celsio)
            res.status(200).json({
                mensage: `O resultado em Fahrenheit é ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Quilometrosmilha(req, res){
        try {
            const result = servico.Quilometrosmilha(req.body.quilometros)
            res.status(200).json({ 
                mensage: `Está é a quantidade em milhas ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Segundorelogio(req, res){
        try {
            const result = servico.Segundorelogio(req.body.tempo_em_segundos)
            res.status(200).json({ 
                mensage: `O horario é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Quilometrosmetros(req, res){
        try {
            const result = servico.Quilometrosmetros(req.body.quilometros)
            res.status(200).json({ 
                mensage: `Está em ${result} metros` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Tabuada1a10(req, res){
        try {         
            const result = servico.Tabuada1a10(req.body.num1)
            res.status(200).json({
                mensage: `Tabuada ${result}` 
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Aprovado(req, res){
        try {         
            const result = servico.Aprovado(req.body.num1, req.body.num2, req.body.num3)
            res.status(200).json({ 
                mensage: `Você foi ${result}` 
            })
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Imc(req, res){
        try {         
            const result = servico.Imc(req.body.sexo, req.body.altura)
            res.status(200).json({ 
                mensage: `O seu imc é ${result}` 
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
}

module.exports = ControllerExercicio
  
