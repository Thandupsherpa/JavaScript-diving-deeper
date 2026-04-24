console.log("Take two numbers and print sum,difference,product,division");

let num1 = 10
let num2 = 3
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

console.log("Even odd modulo");

if(num2 % 2 == 0){
    console.log("even");
}else{
    console.log("Odd"); 
}

console.log("Even odd ternary");
const result = num1 % 2 == 0 ? "Even" : "Odd"
console.log(result);

let no = 0
console.log("Positive, Negative or 0");
const num = no >=1 ? "Positive" :no<0 ? "Negative" : "0"
console.log(no,"is",num);

console.log("Swap two numbers without using third variable");

let a = 69
let b = 96
 
a = a + b
b = a - b
a = a - b
console.log(a,b);

console.log("Voting Eligibility");
 let age = 19
 if(age>=18){
    console.log("Ebigible to vote");
 }else{
    console.log("Not Eligible to vote");
 }

 let age2 = 17
 const Eligibility = age2>=18 ? "Eligible" : "Not Eligible"
 console.log(Eligibility);

 console.log("Greater One");
 
if(a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${b} is greater than ${a}`);
}

console.log("Printing the Greatest number");
let x = 10
let  y = 20
let z = 30
const greatest = x > y && x > z ? `${x} is greatest`:
                 y > x && y > z ? `${y} is greatest`:
                 z > x && z > y ? `${z} is greatest`:
                 "All are equal" 
console.log(greatest);

console.log("Check if a number is divisible by both 3 AND 5")
n = 15
const isDivisible = n % 3 === 0 && n % 5 == 0 ? `${n} is divisible by both 3 and 5`:`${n} is not divisible by 3 and 5`
console.log(isDivisible);

console.log("multiple of 7 OR 11");
const multipleNumber = 77
const ans = multipleNumber % 7 === 0 || multipleNumber % 11 === 0
            ? `${multipleNumber} is multiple of 7 OR 11`
            : `${multipleNumber} is not a multiple of 7 OR 11`
console.log(ans);

console.log("leap year or not");
let  year = 2024

const leapYear = year % 4 === 0 
                 ? `${year} is an leap year`
                 : `${year} is not an leap year`
console.log(leapYear);

const number1 = Number(prompt("Enter first number"))
const number2 = Number(prompt("Enter Second number "))
const operation = prompt("Enter an opetaion")

if(operation == "+"){
    console.log(number1+number2);
} else if(operation == "-"){
    console.log(number1-number2);
}else if(operation == "*"){
    console.log(number1*number2);
}else if(operation == "/"){
    console.log(number1/number2);
}else if(operation == "%"){
    console.log(number1%number2);
}else{
    console.log("Enter a valid number!");
}
