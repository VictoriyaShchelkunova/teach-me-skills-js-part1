// без использования рекурсии;
let arr = [];

let a = 0;
arr.push(a);

let b = 1;
arr.push(b);

let c = 0;

let i = 0;

function getNumbersFibonache(a, b, interval) {

    while (i < interval - 2) {
        c = a + b;
        arr.push(c);
        a = b;
        b = c;
        i++;
    }
    return arr;
}
console.log(getNumbersFibonache(a, b, 10));

// с использованием рекурсии;

let arrNumbers = [];

let firstNum = 0;
arrNumbers.push(firstNum);

let secondNum = 1;
arrNumbers.push(secondNum);

let sum = 0;

let counter = 0;

function getArrayOfFibonache(firstNum, secondNum, interval) {
    sum = firstNum + secondNum;
    arrNumbers.push(sum);
    counter++;
    while (counter < interval - 2) {
        getArrayOfFibonache(secondNum, sum, interval);
    }
    return arrNumbers;
}

console.log(getArrayOfFibonache(firstNum, secondNum, 10));