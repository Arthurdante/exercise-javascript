const { describe, expect, it } = require('@jest/globals')
const Servicomvc = require("../src/services/mvc")

describe('Testes do primeiro exercício', () => {

   const servico = new Servicomvc()

    beforeAll(async () => {
        console.log("iniciando TDD com jest")
    })

    afterAll(() => {
        console.log("Encerados os testes com jest")
    })

   it('Should add a name', () => {  

        const qtde = servico.PegarTodos().length
        servico.Adicionar("a")
        const qtdeafter = servico.PegarTodos().length
        expect(qtdeafter).toBe(qtde + 1);

   })

   it('Should add a name and validate', () => {
        const nome = "a"
        servico.Adicionar(nome)
        const addednome = servico.PegarUm(servico.PegarTodos().length - 1)
        console.log(addednome)
        expect(nome).toBe(addednome);
   })
})