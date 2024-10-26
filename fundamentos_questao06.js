const numeros = [1, 2, 3, 2, 2, 4, 5, 6, 2];

const ocorrencias = {};
numeros.forEach(num => ocorrencias[num] = (ocorrencias[num] || 0) + 1);

const maisFrequente = Object.keys(ocorrencias).reduce((a, b) => ocorrencias[a] > ocorrencias[b] ? a : b);

console.log(`O número com mais ocorrências é: ${maisFrequente}`);
