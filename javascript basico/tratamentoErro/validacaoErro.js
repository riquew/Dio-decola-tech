function checaTamanhoArray(array, tamanho) {
    console.log(array.length);
    try {
        if (!array || !tamanho) {
            throw new ReferenceError('Envie os 2 parametros.');
        }
        if (typeof(array) !== 'object') {
            throw new TypeError('O primeiro parametro deve ser um array do tipo object.');
        }
        if (typeof(tamanho) !== 'number') {
            throw new TypeError('O segundo parametro deve ser um numero.');
        }
        if (array.length !== tamanho) {
            throw new RangeError('O tamanho do array e diferente do tamanho passado.');
        }

        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro e um reference error.');
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log('Este erro e um type error.');
            console.log(e.message);
        }else if(e instanceof RangeError) {
            console.log('Este erro e um range error.');
            console.log(e.message);
        } else {
            console.log('Ocorreu um tipo de erro nao esperado:' + e)
        }
    }
}

let teste = [1, 15, 33, 4];
console.log(checaTamanhoArray(teste, 4))