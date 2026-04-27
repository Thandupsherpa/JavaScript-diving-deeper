// Check if a number is:
// prime or not

let num = 2

let isPrime = true

if(num <= 1){
    isPrime = false
}else{
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false
            break
        }
    }
}
if(isPrime){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}

// Reverse a number (no loops yet—try logic)

let number = 12345

let convertedNumber =  Math.abs(number).toString().split("").reverse().join("")
let ans = Number(convertedNumber)
console.log(ans);

// Check if a number is a palindrome (e.g. 121)

const palindromeNum = 191
const reversedNum = palindromeNum.toString().split("").reverse().join("")
const convertToNumber = Number(reversedNum)
const isPalindrome = palindromeNum === convertToNumber
                     ? `${palindromeNum} is a palindrome`
                     : `${palindromeNum} is not a palindrome`
console.log(isPalindrome);





