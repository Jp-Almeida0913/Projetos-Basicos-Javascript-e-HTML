const btn = document.getElementById('btn');
let min, max, result;

function random (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


btn.addEventListener("click", (event) => {
    event.preventDefault();

    min = parseInt(document.getElementById('minimo').value);
    max = parseInt(document.getElementById('maximo').value);
    if (min > max) {
        let correction = [min, max];
        [min, max] = correction;
    }

    result = random(min, max)
    document.getElementById('resultado').innerHTML = result;
})