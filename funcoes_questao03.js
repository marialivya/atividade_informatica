function maiorMenor(lista) {
    return {
        maior: Math.max(...lista),
        menor: Math.min(...lista)
    };
}

console.log(maiorMenor([10, 5, 8, 2, 7, 1]));
