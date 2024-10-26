function contarVogaisConsoantes(frase) {
    const vogais = 'aeiouAEIOU';
    let vogaisCount = 0;
    let consoantesCount = 0;

    for (let char of frase) {
        if (vogais.includes(char)) {
            vogaisCount++;
        } else if (char.match(/[a-z]/i)) {
            consoantesCount++;
        }
    }

    return { vogais: vogaisCount, consoantes: consoantesCount };
}

console.log(contarVogaisConsoantes("Hello World"));
