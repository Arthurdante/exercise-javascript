class ServicoExercicio {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 + num2
    
        return resultado;
    }
    Multiplicar(valorhora, quantidadehoras){
        if(isNaN(valorhora) || isNaN(quantidadehoras)){
            throw new Error("Favor informar números")
        }
        const resultado = valorhora * quantidadehoras
    
        return resultado;
    }
    Media5(pesopessoa1, pesopessoa2, pesopessoa3, pesopessoa4, pesopessoa5){
        if(isNaN(pesopessoa1) || isNaN(pesopessoa2) || isNaN(pesopessoa3) || isNaN(pesopessoa4) || isNaN(pesopessoa5)){
            throw new Error("Favor informar números")
        }
        const resultado = (pesopessoa1 + pesopessoa2 + pesopessoa3 + pesopessoa4 + pesopessoa5)/5
    
        return resultado;
    }
    Celsiofahrenheit(celsius) {
        if(isNaN(celsius)){
            throw new Error("Favor informar números")
        }
        const resultado = (9*celsius+160)/5

        return resultado
    }
    Quilometrosmilha(quilometros) {
        if(isNaN(quilometros)){
            throw new Error("Favor informar números")
        }
        const resultado = quilometros * 1.60934
    
        return resultado;
    }
    Segundorelogio(tempo_em_segundos) {
        if(isNaN(tempo_em_segundos)){
            throw new Error("Favor informar números inteiros")
        }
        const horas = tempo_em_segundos / 3600
        const minutos = (tempo_em_segundos % 3600) / 60
        const segundos = tempo_em_segundos % 60
        const resultado = `${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundos)}`
    
        return resultado
    }
    Quilometrosmetros(quilometros){
        if(isNaN(quilometros)){
            throw new Error("Favor informar números inteiros")
        }
        const metro = quilometros / 100
        const centimetro = quilometros % 100
        const resultado = `${parseInt(metro)},${parseInt(centimetro)}`
    
        return resultado
    }
    Tabuada1a10(num1) {
        if(isNaN(num1)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado = ''
        for (let i = 1; i <= 10; i++) {
            const multiplicacao = num1 * i
            resultado += `${num1} x ${i} = ${multiplicacao}, ` 
        }
        return  resultado
    }
    Aprovado(num1, num2, num3) {
        if(isNaN(num1 || num2 || num3)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado = (num1 + num2 + num3)/3
        if(resultado>=7)
        {
            resultado= 'aprovado'
        }else
        {
            resultado= 'reprovado'
        }
        return  resultado 
    }
    Imc(sexo, altura) {
        if(isNaN(altura)){
            throw new Error("Favor informar números inteiros")
        }else if(typeof sexo != 'string'){
            throw new Error("Favor informar sexo como letra")
        }
        let resultado = 0
        if(sexo.toLowerCase() == 'homem' || sexo.toLowerCase() == 'h' || sexo.toLowerCase() == 'macho' || sexo.toLowerCase() == 'm')
        {
            resultado = (72.7 * altura) - 58
        }else if(sexo.toLowerCase() == 'mulher' || sexo.toLowerCase() == 'f' || sexo.toLowerCase() == 'femea' || sexo.toLowerCase() == 'fêmea')
        {
            resultado = (62.1*altura)-44.7
        }else{
            throw new Error("Favor informar sexo válido")
        }
        resultado = resultado.toFixed(2);
        return  resultado 
    }
} 
    
module.exports = ServicoExercicio