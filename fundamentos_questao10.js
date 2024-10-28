const nomeCompleto = "Alan Mathison Turing";
const nomes = nomeCompleto.split(' ');

const sobrenome = nomes.pop(); 
const primeiroNome = nomes.shift(); 
const iniciais = nomes.map(nome => nome[0] + '.').join(' '); 

console.log(`${sobrenome[0]}. ${iniciais} ${primeiroNome}`);
