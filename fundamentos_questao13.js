const numeros = [2, 3, 4, 5];
const soma = numeros.reduce((acc, num) => acc + Math.pow(num, 3), 0);

console.log(`A soma dos números é: ${soma}`);
