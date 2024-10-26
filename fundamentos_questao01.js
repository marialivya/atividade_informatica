const hoje = new Date();
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const diaSemana = diasDaSemana[hoje.getDay()];
const horaAtual = hoje.toLocaleTimeString('pt-BR');

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
