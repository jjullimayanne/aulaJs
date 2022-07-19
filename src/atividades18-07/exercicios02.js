const entrada = require('readline-sync');

let arrayDiaSemana = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

const dia = entrada.questionInt('\nInforme em numero um dia da semana: ');

if (dia >= 0 && dia <= 7) {
    console.log(arrayDiaSemana[dia - 1]);
} else {
    console.log('Numero informado invalido!')
}