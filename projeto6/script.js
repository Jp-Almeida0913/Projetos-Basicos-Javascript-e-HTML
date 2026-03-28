const passwordSize = document.getElementById('tamanho');
const uppercase = document.getElementById('maiuscula');
const lowercase = document.getElementById('minuscula');
const number = document.getElementById('numero');
const symbol = document.getElementById('simbolo');

const btn = document.getElementById('btn');
const copybtn = document.getElementById('copiarSenha');
copybtn.hidden = true;

const uppercaseLetters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const lowercaseLetters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
]

const numbersChar = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]

const symbolsChar = [
    "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "+",
    "=", "<", ">", "?"
]


btn.addEventListener("click", (submit) => {
    submit.preventDefault();

    const characters = []
    let password = "";

    if(uppercase.checked){
        characters.push(...uppercaseLetters);
    }
    if(lowercase.checked){
        characters.push(...lowercaseLetters);
    }
    if(number.checked){
        characters.push(...numbersChar);
    }
    if(symbol.checked){
        characters.push(...symbolsChar);
    }

    if (characters.length === 0) {
    alert("Selecione pelo menos um tipo de caractere");
    return;
    }

    for(let i = 0; i < passwordSize.value; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];

    }
    document.getElementById('senha').innerHTML = password;
    console.log(password);
    copybtn.hidden = false;
})

copybtn.addEventListener("click", () =>{
    const password = document.getElementById('senha').textContent
    navigator.clipboard.writeText(password);

    alert("Senha Copiada!")
})