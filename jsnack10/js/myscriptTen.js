const firstN = parseInt(prompt("Inserisci un numero"));

for (let i = 0; i<firstN; i++){ 
    const array = []; 
    while(array.length < 10){
        const randomNumber = Math.floor((Math.random() * 4532) + 4);
        array.push(randomNumber);
    }
    console.log(array);
} 

/* bonus 1 */
console.log("First bonus");
const N = parseInt(prompt("Quanti array vuoi creare?( numero N )"));

const M = parseInt(prompt("Quanti elementi vuoi nell' Array? (numero M"));

const L = parseInt(prompt("Inserisci il valore della somma degli elementi interni a ciascuno Array (numero L)"));

for(let i = 0; i<N; i++){
    const nArray = [];
    let sumElements = 0;
    while((nArray.length < M) || (sumElements > L)){
        const randomNumberM = Math.floor((Math.random() * 4532) + 4);
        nArray.push(randomNumberM);
        sumElements += randomNumberM;
        console.log(sumElements);
    }
    console.log(nArray);
    console.log("Array n. " + i);
}


/* bonus 2 */
console.log("Second Bonus");

const Ndue = parseInt(prompt("Quanti array vuoi creare?( numero N )"));

const Mdue = parseInt(prompt("Quanti elementi vuoi nell' Array? (numero M"));

const Ldue = parseInt(prompt("Inserisci il valore della somma degli elementi interni a ciascuno Array (numero L)"));

for(let i = 0; i< Ndue; i++){
    const nArrayDue = [];
    let sumElementsDue = 0;
    while((nArrayDue.length <  Mdue) && (sumElementsDue < Ldue)){
        const randomNumberMdue = Math.floor((Math.random() * 4532) + 4);
        sumElementsDue += randomNumberMdue;
        nArrayDue.push(randomNumberMdue);
    }
    console.log(nArrayDue);
    console.log("Array n. " + i);
}

