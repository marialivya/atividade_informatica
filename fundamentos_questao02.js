const a = 3;
const b = 4;
const c = 5;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`A área do triângulo é: ${area.toFixed(2)}`);
