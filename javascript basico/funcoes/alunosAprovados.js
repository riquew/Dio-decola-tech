
const alunos = [
    {
        nome: 'Gui',
        nota: 4.2,
        turma: '1B'
    },
    {
        nome: 'Vava',
        nota: 10,
        turma: '1A'
    },
    {
        nome: 'Ibra',
        nota: 5.2,
        turma: '1A'
    },
    {
        nome: 'Lulu',
        nota: 7.4,
        turma: '1B'
    },
    {
        nome: 'Joao',
        nota: 2.3,
        turma: '1B'
    },
    {
        nome: 'Ingrid',
        nota: 8.6,
        turma: '1A'
    }
];

function verificaNota (alunos, media){
    let alunosAprovados = [];
    for (aluno of alunos) {
        if (aluno.nota >= media) {
            alunosAprovados.push(aluno.nome)
        }
    }
    console.log(`A nota dos alunos aprovados foi ${alunosAprovados}`)
}


verificaNota(alunos, 5);