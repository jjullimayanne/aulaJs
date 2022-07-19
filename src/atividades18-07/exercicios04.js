let rs = require('readline-sync');

let valor = rs.questionInt("Qual o valor da mercadoria: ");

let a_pagar = valor - (valor * parseFloat(0.20))

console.log("O valor da mercadoria é R$", valor , " seu valor com desconto é R$" , valor * parseFloat(0.20), "O valore a se pagar sera: R$", a_pagar);