
function checkSum (x,y){
    sum = x + y;
    if((sum % 2 ) === 0){
        return true;
    } 

    return false;
}

console.log(checkSum(10,20));