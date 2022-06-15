function adcionarTarefa() {
    let novaTarefa = tarefa.value;
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    let labelTarefa = document.createElement('label');
    labelTarefa.appendChild(document.createTextNode(novaTarefa));
    let li = document.createElement('li');
    li.appendChild(checkBox);
    li.appendChild(labelTarefa);
    ul.appendChild(li);
    tarefa.value = '';
}


let tarefa = document.querySelector("input");
let ul = document.querySelector("ul");

