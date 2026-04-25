// Take a number and print:
// "Fizz" if divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by both

const number = 15


const fuzzBuzz = number % 3 === 0 && number % 5 === 0
                 ? "FizzBuzz"
                 : number % 3 === 0
                 ? "Fizz" 
                 : number % 5 === 0
                 ? "Buzz"
                 : "The number is not divisible by both 3 and 5"
                 
console.log(fuzzBuzz);

// Take 3 numbers:
// print the smallest number

let a = 10
let b = 6
let c = 1

const smallest = a < b && a < c ? `${a} is the smallest one`
                 : b < a && b < c ? `${b} is the  smallest one`
                 : c < a && c < b ? `${c} is the smallest one`
                 :`${a}, ${b} , ${c} are equal`
console.log(smallest);

// Take a number:
// check if it is 3-digit or not

const threeDigitNumber = 333
const result = Math.abs(threeDigitNumber).toString().length
const checkNumber = result == 3 ? `${threeDigitNumber} is an 3-digit number`
                    : `${threeDigitNumber} is not an 3-digit number`
console.log(checkNumber);

// Take a number:
// check if it is even AND greater than 50

const num = 100
const evenAndGreaterThanFifty = num % 2 === 0 && num > 50
                                  ? `${num} is even and greater than 50`
                                  : num % 2 === 0
                                  ? `${num} is even but not greater than 50`
                                  : num > 50
                                  ? `${num} is greater than 50 but not an even number`
                                  : `${num} is not even number or greater than 50`

console.log(evenAndGreaterThanFifty);
                                 

