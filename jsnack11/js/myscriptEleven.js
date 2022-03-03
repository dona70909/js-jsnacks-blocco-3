
const arrayNumbers = [1,2,5,7,10,23,65];

function checkEvenOdd(number){
    if((number % 2) == 0){
        return true;
    }

    return false;
}

const divRed = document.getElementById("my-red");
const divGreen = document.getElementById("my-green");

for(let i = 0; i < arrayNumbers.length; i++){

    if(checkEvenOdd(arrayNumbers[i])){
        divRed.innerHTML += arrayNumbers[i];
    } else {
        divGreen.innerHTML += arrayNumbers[i];
    }
}