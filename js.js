var firstNumber;
var secondNumber;
var result;

//Set the value entered as the first number
function setFirstNumber(val){
    firstNumber = Number(val);
}

//Set the value entered as the second number
function setSecondNumber(val){
    secondNumber = Number(val);
}

function getSolution(status){

   let element = document.getElementById('solution');

 //addition check
    if(status==='add'){
        result = firstNumber + secondNumber;

        element.innerHTML = result;
        return;
    }

        //Mulitplication check
        if(status==='mult'){
            result = firstNumber * secondNumber;
            element.innerHTML = result;
            return;

        }

            //Substraction check
    if(status==='sub'){
        result = firstNumber - secondNumber;
        element.innerHTML = result;
        return;
    }

        //Modulus check
        if(status==='mod'){
            result = firstNumber % secondNumber;
            element.innerHTML = result;
            return;
        }

    //greater than check
    if(status==='greater'){
        result = firstNumber > secondNumber;
        element.innerHTML = result;
        return;
    }



}

