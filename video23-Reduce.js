const number = [1,2,3,4,5];
const sum = number.reduce((accumulator,currentValue) =>accumulator +currentValue);
console.log(sum);
 

// works with intitial value
const number1 = [1,2,3,4,5];
const sum1 = number1.reduce((accumulator,currentValue) =>accumulator +currentValue,10);
console.log(sum1);
 