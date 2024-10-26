const nomeCompleto = "Alan Mathison Turing";
const [primeiroNome, ...resto] = nomeCompleto.split(' ').reverse();
const iniciais = resto.map(nome => nome[0] + '.').join(' ');

console.log(`${iniciais} ${primeiroNome}`);
