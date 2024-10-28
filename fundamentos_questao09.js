const frase = "Javascript é muito interessante";
const somaTamanhos = frase.split(' ').reduce((acc, palavra) => acc + palavra.length, 0);

console.log(`A soma dos tamanhos das palavras é: ${somaTamanhos}`);
