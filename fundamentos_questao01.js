const hoje = new Date();
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const horaAtual = hoje.toLocaleTimeString('pt-BR');

console.log(`Hoje é: ${diasDaSemana[hoje.getDay()]}.`);
console.log(`A hora atual é: ${horaAtual}.`);
