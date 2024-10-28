const frase = "Deus é perfeito e maravilhoso";
const palavrasModificadas = frase.split(' ').map(palavra => {
    return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
}).join(' ');

console.log(palavrasModificadas);
