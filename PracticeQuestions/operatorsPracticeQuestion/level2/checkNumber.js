// Take a number and check:
//  is it divisible by 2 and 3 both?

let number = 30
const result = number % 2 === 0 && number % 3 === 0
               ? `${number} is divisible by both 2 and 3`
               :`${number} is not divisible by 2 and 3`
console.log(result);

// Take a number and check:
//  is it divisible by 5 or 10?

let number2 = 25
const isDivisible = number2 % 5 === 0 || number2 % 10 === 0 
                    ? `${number2} is divisible by 5 or 10`
                    : `${number2} is not divisible by 5 or 10`
console.log(isDivisible);

// Take two numbers:
//  print the smaller number

let a = 20
let b = 11
const smallest = a < b ? `${a} is the smallest`
                 : b < a ? `${b} is the  smallest`
                 :`${a} and ${b} are equal`
console.log(smallest);

// Take a number:
//  print whether it is greater than 100 or not

let number3 = 200
console.log(number3 > 100 ?`${number3} is greater than 100` 
            : number3 < 100 ? `${number3} is less than 100`
            : `${number3} is equal to 100`);

// Take a number:
//  check if it is positive and even

let number4 =  1000
const isPositiveAndEven = number4 > 0 && number4 % 2 === 0
                          ? `${number4} is Positive and even`
                          : `${number4} is not positive and even`
console.log(isPositiveAndEven);
