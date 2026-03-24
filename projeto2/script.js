const button = document.getElementById('btn');
const lista = [];
let resposta = 

button.addEventListener("click", (event) => {
    event.preventDefault();
    resposta = document.getElementById('tarefa');

    lista.push(resposta.value);
    document.querySelector('.lista').innerHTML += `<li>${lista[lista.length-1]}</li>`;
})

console.log(lista);

