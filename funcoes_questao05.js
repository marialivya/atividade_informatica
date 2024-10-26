function maiorPalavra(frase) {
    const palavras = frase.split(' ');
    let maior = '';

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

console.log(maiorPalavra("A inteligência artificial é fascinante"));
