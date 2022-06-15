function comparaNumeros(num1, num2) {
    const igualdade = comparaIgualdade(num1, num2);
    const somaMaiorOuMenor = comparaMaiorOuMenor(num1, num2);
    if(num1 === 5 && num2 === 5) {
        return `Os números ${num1} e ${num2} ${igualdade} iguais. Sua soma é ${somaMaiorOuMenor[0]}, que é ${somaMaiorOuMenor[1]} a 10 e ${somaMaiorOuMenor[2]} que 20`
    } else if(num1 === 10 && num2 === 10) {
        return `Os números ${num1} e ${num2} ${igualdade} iguais. Sua soma é ${somaMaiorOuMenor[0]}, que é ${somaMaiorOuMenor[1]} que 10 e ${somaMaiorOuMenor[2]} a 20`
    } else {
        return `Os números ${num1} e ${num2} ${igualdade} iguais. Sua soma é ${somaMaiorOuMenor[0]}, que é ${somaMaiorOuMenor[1]} que 10 e ${somaMaiorOuMenor[2]} que 20`
    }
}

function comparaIgualdade(num1, num2) {
    if (num1 === num2){
        return 'são';
    } else {
        return 'não são';
    }
}

function comparaMaiorOuMenor(num1, num2){
    const soma = num1 + num2;
    let arrayMaiorOuMenor = [soma];
    if(soma < 10) {
        arrayMaiorOuMenor.push('menor');
    } else if( soma > 10) {
        arrayMaiorOuMenor.push('maior');
    } else {
        arrayMaiorOuMenor.push('igual');
    }
    if(soma < 20) {
        arrayMaiorOuMenor.push('menor');
    } else if( soma > 20) {
        arrayMaiorOuMenor.push('maior');
    } else {
        arrayMaiorOuMenor.push('igual');
    }
    return arrayMaiorOuMenor
}

console.log(comparaNumeros(5, 4))