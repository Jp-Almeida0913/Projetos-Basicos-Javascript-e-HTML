const btn = document.querySelectorAll("button");
let firstNumber, secondNumber, operation, result;

btn.forEach((button) => {
    button.addEventListener("click", () =>{
        operation = button.value;
        firstNumber = parseInt(document.getElementById("firstNumber").value);
        secondNumber = parseInt(document.getElementById("secondNumber").value);

        if (operation == "soma"){
            result = firstNumber + secondNumber;
        }
        else if (operation == "subtracao"){
            result = firstNumber - secondNumber;
        }
        else if (operation == "multiplicacao"){
            result = firstNumber * secondNumber;
        }
        else{
            result = firstNumber / secondNumber;
        }

        document.getElementById('resultado').innerHTML = result;
        console.log(result);
    });
});