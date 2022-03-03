
const arrayNumbers = [];

function randomNumber(max,min){
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i< 10;i++){
    arrayNumbers.push(randomNumber(100,1));
}

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