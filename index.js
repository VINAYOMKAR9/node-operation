// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const sub = require('./sub')
const divide = require('./divide')

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log('sum',sumResult);


let subA = 6;
let subB = 5;
let subResult = sub(subA, subB);
console.log('sub',subResult);


let divA = 10;
let divB = 5;
if(divA != 0 && divB != 0){

    let divResult = divide(divA, divB);
    console.log('div =',divResult);
}else{
    console.log('number should not be 0')
}

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log('mul',mulResult);
