function inverterNumero(numero) {
  return parseInt(numero.toString().split('').reverse().join(''), 10);
}

console.log(inverterNumero(38642));
