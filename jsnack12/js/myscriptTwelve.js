
function randomNumber(max,min){
    return Math.floor(Math.random() * (max - min) + min);
}

function checkSum (x,y){
    sum = x + y;
    if((sum % 2 ) === 0){
        return true;
    } 

    return false;
}

console.log(checkSum(randomNumber(10,20),randomNumber(7,14)));
