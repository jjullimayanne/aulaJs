let rs = require('readline-sync');

let numero1 = rs.questionInt("Digite o primeiro número: ");
let numero2 = rs.questionInt("Digite o segundo número: ");

if(numero1 === numero2){
    console.log("Os números são iguais!")
}else if(numero1 > numero2){
    console.log("O primeiro número é maior")
}else{
    console.log("O segundo número é maior")
}