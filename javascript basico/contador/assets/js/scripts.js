function decrementa(){
    let texto = document.querySelector('p')
    if (number > 0) {
        texto.innerHTML = number;
        texto.style.fontSize = '200px';
        number --;
    } else {
        texto.innerHTML = 0;
        texto.style.color = 'red';
    }
}

function contador(){
    const ativaContador = setInterval(decrementa, 1000);
    tela.onclick = '';
}


let element = document.querySelector('p').innerHTML;
let number = 10;

let tela = document
tela.onclick = contador;



