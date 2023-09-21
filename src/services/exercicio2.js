class ServicoExercicio2 {
    Operacao(operacao,num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado
        if(operacao == 1){
            resultado =(num1 + num2)
        }else if (operacao == 2){
            resultado =(num1 - num2);
        }else if (operacao == 3){
            resultado =(num1 * num2);
        }else{
            resultado =(num1 / num2)
        }
            return resultado
    }
    Posiounega(num1) {
        if(isNaN(num1)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado
        if(num1 > 0){
            resultado ='positivo'
        }else if (num1 < 0){
            resultado ='negativo'
        }else{
            resultado ='é igual a 0'
        }
            return resultado
    }
    Parouimpar(num1) {
        if(isNaN(num1)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado
        if(num1 == 0){
            resultado ='neutro'
        }else if(num1 % 2 == 0){
            resultado ='par'
        }else{
            resultado ='impar'
        }
            return resultado
    }
    Maiorque(num1,num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado
        if(num1 > num2){
            resultado =`${num1} maior que o ${num2}`
        }else if(num1 < num2){
            resultado =`${num2} maior que o ${num1}`
        }else{
            resultado =`${num1} igual a ${num2}`
        }
            return resultado
    }
    Triangulo(a, b, c, base, altura) {
        if(isNaN(a) || isNaN(b) || isNaN(num2) || isNaN(num2) || isNaN(num2)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado
        if (a <= 0 || b <= 0 || c <= 0) {
            return resultado = `Medidas inválidas. Todos os lados devem ser positivos verifique os valores a=${a} b=${b} c=${c}`
        }
    
        if (a + b > c && a + c > b && b + c > a) {
            resultado = 'Triângulo válido. A área é '
            resultado += (base * altura / 2)
        } else {
            resultado = `Triângulo inválido verifique os valores a=${a} b=${b} c=${c}`
        }
        return resultado
    }
    Impostoderenda(cpf,dependentes,salario) {
        if(isNaN(cpf) || isNaN(dependentes) || isNaN(salario)){
            throw new Error("Favor informar números inteiros")
        }
        const salamini = 1500
        if(salario <= 2 * salamini){
    
            resultado =`${0}% cpf ${cpf}`
            
        }else if(salamini * 2 < salario <= 3 * salamini){
    
            resultado =`${5 - dependentes * 5}% cpf ${cpf}`
    
        }else if(salamini * 3 < salario <= 5 * salamini){
    
            resultado =`${10 - dependentes * 5}% cpf ${cpf}`
    
        }else if(salamini * 5 < salario <= 7 * salamini){
    
            resultado =`${15 - dependentes * 5}% cpf ${cpf}`
    
        }else{
    
            resultado =`${20 - dependentes * 5}% cpf ${cpf}`
    
        }
        return resultado
    }
    Mediaponderada(num1, num2, num3) {
        if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
            throw new Error("Favor informar números inteiros")
        }
        let media = (num1 * 2 + num2 * 3 + num3 * 5)/10
        media = media.toFixed(1);
        let resultado
        if(media>=7)
        {
            resultado = `aprovado com média ${media}`
        }else
        {
            resultado = `reprovado com média ${media}`
        }
        return  resultado 
    }
    Valorcarro(valordefabriva) {
        if(isNaN(valordefabriva)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado = valordefabriva + (valordefabriva * (28 + 45)/100)
        resultado = resultado.toFixed(1);
        return  resultado 
    }
    Juros(dias, taxa, capital) {
        if(isNaN(dias) || isNaN(taxa) || isNaN(capital)){
            throw new Error("Favor informar números inteiros")
        }
        let resultado = capital * (taxa/100 + 1) * dias
        resultado = resultado.toFixed(1);
        return  resultado 
    }
}






module.exports = ServicoExercicio2