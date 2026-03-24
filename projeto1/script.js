const button = document.getElementById('btn');

let contador = 0;
console.log(contador)

document.getElementById('contador').innerHTML = contador;

button.addEventListener("click", () => {
    contador++
    document.getElementById('contador').innerHTML = contador;
    console.log(contador)
})