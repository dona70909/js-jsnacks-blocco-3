const arrayNumbers = [];

const arrayOdd = [];
const arrayEven = [];



let sum = 0;
while(sum < 200){
    const userNumber = parseInt(prompt("Inserisci un numero"));
    arrayNumbers.push(userNumber);
    sum += userNumber;
}

console.log(arrayNumbers);
console.log(sum);

console.log("Bonus");

let sumBonus = 0;
while(sumBonus < 200){
    const userNumberBonus = parseInt(prompt("Inserisci un numero (es bonus)"));
    if ((userNumberBonus % 2) == 0){
        arrayEven.push(userNumberBonus);
    } else{
        arrayOdd.push(userNumberBonus);
    } 
    sumBonus += userNumberBonus;
}

console.log(arrayOdd);
console.log(arrayEven);
console.log(sumBonus);

