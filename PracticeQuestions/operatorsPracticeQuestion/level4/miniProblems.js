// create a simple grading system:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// below 70 → Fail

const marks = 71
let A = marks >= 90 && marks <= 100
let B = marks >= 80 && marks <= 89
let C = marks >= 70 && marks <= 79
let Fail = marks < 70

if(A){
    console.log("A");
}else if(B){
    console.log("B");
 
}else if(C){
    console.log("C");
}else if(Fail){
    console.log("Fail");
}else{
    console.log("Invalid marks"); 
}

// Electricity bill system:
// units ≤ 100 → ₹5 per unit
// 101–200 → ₹7 per unit
// 200 → ₹10 per unit

const units = 150

let chargeFive = units <= 100
let chargeSeven = units <= 200
let chargeTen = units > 200

if(chargeFive){
    bill =  units * 5
}else if(chargeSeven){
    bill =  units * 7
}else if(chargeTen){
    bill =  units * 10
}else{
    console.log("Invalid unit");
}
console.log(`Total bill is ${bill}`);

// Login system simulation:
// username = "admin"
// password = "1234"
// Print:
// "Login success" or "Login failed"

 let username = "admin"
 let password = "1234"

 let user = prompt("Enter username")
 let pass = prompt("Enter password")

 const authentication = !user || ! pass 
                        ? "please fill all fields"
                        :user === username && pass === password
                        ? `Login successful for username ${user}`
                        : `Login failed for username ${user}`
console.log(authentication);

   