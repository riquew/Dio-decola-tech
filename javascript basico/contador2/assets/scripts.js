function decrement() {
    number --;
    contador.innerHTML = number;
    paintNumber();
    valuecheck();
}

function increment() {
    number ++;
    contador.innerHTML = number;
    paintNumber();
    valuecheck();
}

function paintNumber() {
    if (number < 0) {
        contador.style.color = "red";
    } else {
        contador.style.color = "black";
    }
}

function valuecheck() {
    if (number > 9) {
        incrementButton.disabled = true;
    } else {
        incrementButton.disabled = false;
    }
}

let contador = document.querySelector("#currentNumber")
let number = document.querySelector("#currentNumber").innerHTML
console.log(number)
let incrementButton = document.querySelector("#incrementa");

console.log(incrementButton)