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
        if(isNaN(tempo_em_segundos) || Number.isInteger(tempo_em_segundos)){
            throw new Error("Favor informar números inteiros")
        }
        const horas = tempo_em_segundos / 3600
        const minutos = (tempo_em_segundos % 3600) / 60
        const segundos = tempo_em_segundos % 60
        const resultado = `${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundos)}`
    
        return resultado
    }
} 


// function quilometrosmetros(quilometros) {

//     const metro = quilometros / 100
//     const centimetro = quilometros % 100
//     const medida = `${parseInt(metro)},${parseInt(centimetro)}`

//     return medida
// }
// function tabuada1a10(num1) {
//     let resultado = ''
//     for (let i = 1; i <= 10; i++) {
//         const multiplicacao = num1 * i
//         resultado += `${num1} x ${i} = ${multiplicacao}, `
//     }
    
//     return  resultado 
// }
// function aprovado(num1, num2, num3) {
//     let resultado = (num1 + num2 + num3)/3
//     if(resultado>=7)
//     {
//         resultado= 'aprovado'
//     }else
//     {
//         resultado= 'reprovado'
//     }
//     return  resultado 
// }
// function imc(sexo, altura) {
//     let resultado = altura
//     if(sexo == 'homem'||'Homem'||'h'||'H'||'macho'||'Macho')
//     {
//         resultado = (72.7 * altura) - 58
//     }else if(sexo = 'Mulher'||'mulher'||'f'||'F'||'femea'||'Femea'||'fêmea'||'Fêmea')
//     {
//         resultado = (62.1*altura)-44.7
//     }
//     resultado = resultado.toFixed(2);
//     return  resultado 
// }
// function operacao(operacao,num1, num2) {
//     let resultado
//     if(operacao == 1){
// 		resultado =(num1 + num2)
//     }else if (operacao == 2){
// 		resultado =(num1 - num2);
//     }else if (operacao == 3){
// 		resultado =(num1 * num2);
//     }else{
//         resultado =(num1 / num2)
//     }
//         return resultado
// }
// function posiounega(num1) {
//     let resultado
//     if(num1 > 0){
// 		resultado ='positivo'
//     }else if (num1 < 0){
// 		resultado ='negativo'
//     }else{
//         resultado ='é igual a 0'
//     }
//         return resultado
// }
// function parouimpar(num1) {
//     let resultado
//     if(num1 == 0){
// 		resultado ='neutro'
//     }else if(num1 % 2 == 0){
// 		resultado ='par'
//     }else{
//         resultado ='impar'
//     }
//         return resultado
// }
// function maiorque(num1,num2) {
//     let resultado
//     if(num1 > num2){
// 		resultado =`${num1} maior que o ${num2}`
//     }else if(num1 < num2){
// 		resultado =`${num2} maior que o ${num1}`
//     }else{
//         resultado =`${num1} igual a ${num2}`
//     }
//         return resultado
// }
// function triangulo(a, b, c, base, altura) {
//     let resultado
//     if (a <= 0 || b <= 0 || c <= 0) {
//         return resultado = `Medidas inválidas. Todos os lados devem ser positivos verifique os valores a=${a} b=${b} c=${c}`
//     }

//     if (a + b > c && a + c > b && b + c > a) {
//         resultado = 'Triângulo válido. A área é '
//         resultado += (base * altura / 2)
//     } else {
//         resultado = `Triângulo inválido verifique os valores a=${a} b=${b} c=${c}`
//     }
//     return resultado
// }
// function impostoderenda(cpf,dependentes,salario) {
//     const salamini = 1500
//     if(salario <= 2 * salamini){

// 		resultado =`${0}% cpf ${cpf}`
        
//     }else if(salamini * 2 < salario <= 3 * salamini){

// 		resultado =`${5 - dependentes * 5}% cpf ${cpf}`

//     }else if(salamini * 3 < salario <= 5 * salamini){

// 		resultado =`${10 - dependentes * 5}% cpf ${cpf}`

//     }else if(salamini * 5 < salario <= 7 * salamini){

// 		resultado =`${15 - dependentes * 5}% cpf ${cpf}`

//     }else{

//         resultado =`${20 - dependentes * 5}% cpf ${cpf}`

//     }
//     return resultado
// }
// function mediaponderada(num1, num2, num3) {
//     let media = (num1 * 2 + num2 * 3 + num3 * 5)/10
//     media = media.toFixed(1);
//     let resultado
//     if(media>=7)
//     {
//         resultado = `aprovado com média ${media}`
//     }else
//     {
//         resultado = `reprovado com média ${media}`
//     }
//     return  resultado 
// }
// function valorcarro(valordefabriva) {
//     let resultado = valordefabriva + (valordefabriva * (28 + 45)/100)
//     resultado = resultado.toFixed(1);
//     return  resultado 
// }
// function juros(dias, taxa, capital) {
//     let resultado = capital * (taxa/100 + 1) * dias
//     resultado = resultado.toFixed(1);
//     return  resultado 
// }
// module.exports =  celsiofahrenheit, quilometrosmilha, segundoprelogio, 
//     tabuada1a10, quilometrosmetros,aprovado, imc, operacao, posiounega, 
//     parouimpar, maiorque, triangulo, impostoderenda, mediaponderada, valorcarro, juros}
module.exports = ServicoExercicio