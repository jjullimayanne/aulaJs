/* Calcule o tempo de uma viagem de carro. Pergunte a distâcia
a percorrer e a velocidade média esperada para a viagem. */

const rs = require("readline-sync");
const distancia = rs.questionInt("Qual a distância a ser percorrida em km? ");
	console.log(distancia + " km");
const velocidadeMedia = rs.questionInt("Qual a velocidade média em km/h? ");
	console.log(velocidadeMedia + " km/h");
const tempo = distancia / velocidadeMedia

if (tempo < 1) {
	console.log("O tempo aproximado da sua viagem é de: " + tempo.toFixed(2) + " minutos.");
}else {
	console.log("O tempo aproximado da sua viagem é de: " + tempo.toFixed(2) + " horas.");
}