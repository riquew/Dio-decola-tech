function calculaIdade(anos) {
    console.log( `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`);
    }

const pessoa1 = {
        nome: 'Renan',
        idade: 22,
    }
const pessoa2 = {
        nome: 'Marcos',
        idade: 33,
    }
const pessoa3 = {
        nome: 'Carla',
        idade: 52
    }


calculaIdade.apply(pessoa3, [30]);