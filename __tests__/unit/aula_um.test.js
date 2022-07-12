// describe('teste',() => {
//     it('should first', () => { 
//        const x = 2;
//        const y = 6;
//        const sum = x + y;
//        expect(sum).toBe(8);
//     });
// })
const functionSenha = require("../../src/aula_um")
describe('password should be correct', () => { 
   it('should be correct', () => {

      expect(functionSenha(1234)).toBe("ACESSO PERMITIDO");


   })
});