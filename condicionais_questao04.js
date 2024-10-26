const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [30, 60, 80]]
];

alunos.forEach(aluno => {
    const [nome, notas] = aluno;
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const status = media >= 70 ? 'Aprovado' : 'Reprovado';
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
});
