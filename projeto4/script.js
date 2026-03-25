const btn = document.getElementById('btn');
let nome, idade;

const listaPessoas = []

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;
}



btn.addEventListener("click", (event) =>{
    event.preventDefault();
    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;

    listaPessoas.push(new Pessoa(nome, idade));

    document.querySelector('.lista').innerHTML += `<li>Nome:${listaPessoas[listaPessoas.length-1].nome} 
    | Idade: ${listaPessoas[listaPessoas.length-1].idade}</li>`;


    console.log(Pessoa);
    console.log(listaPessoas);
})