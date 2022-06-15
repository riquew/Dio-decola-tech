function checaPalindromo(frase) {
    const fraseSemEspaco = frase.toLowerCase().replace(/\s/g,'');
    const finalFrase = (fraseSemEspaco.length) - 1;
    let letra = 0
    let palindromo = true;
    for (let i = finalFrase; i >= 0; i -- ) {
        if (fraseSemEspaco[letra] === fraseSemEspaco[i]){
            letra ++;
        } else {
            palindromo = false;
            break;
        }
    }
    if (palindromo) {
        console.log('E palindromo.')
    } else {
        console.log('Nao e palindromo.')
    }
}

function checaPalindromo2(frase){
    const fraseSemEspaco = frase.toLowerCase().replace(/\s/g,'');
    const finalFrase = (fraseSemEspaco.length) - 1;
    let palindromo = true;
    let novaFrase = '';
    for (let i = finalFrase; i >= 0; i -- ) {
        novaFrase += fraseSemEspaco[i];
    }
    if (novaFrase === fraseSemEspaco){
        console.log('E palindromo.')
    } else {
        console.log('Nao e palindromo.')
    }
}

checaPalindromo('O galo ama o lago');
checaPalindromo2('Amar dá drama');