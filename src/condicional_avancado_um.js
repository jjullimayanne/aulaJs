let rs = require('readline-sync')

let numberOne = parseInt(rs.question('Digite o primeior número :'))

let numbertow = parseInt(rs.question('Digite o Segundo número :'))

if (numberOne > numbertow) {
  console.log(`O numero ${numberOne} é maior que o número ${numbertow}`)
} else if (numberOne < numbertow) {
  console.log(`o Número ${numbertow} é maior que o ${numberOne}`)
} else if (numberOne === numbertow) {
  console.log('os números são iguais')
}
 