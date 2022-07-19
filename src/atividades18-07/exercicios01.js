let rs = require('readline-sync');

let numero1 = rs.questionInt("Digite o primeiro numero: ");
let numero2 = rs.questionInt("Digite o segundo numero: ");

if(numero1 === numero2){
    console.log("Os números são iguais!")
}else if(numero1 > numero2){
    console.log("O primeiro numero é maior")
}else{
    console.log("O segundo numero é maior")
}