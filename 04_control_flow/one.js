// const temperature = 41;
// if(temperature === 41){
//     // console.log("less than 50");
// }else {
//     // console.log("temperature is greater than 41");
// }
// // console.log("Will always execute");

// const score = 200
// if(score > 100){
//    const power = "fly"
//    console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);  //it cannot access the power variable because power is initialized only in if block

// const balance = 1000
// // if(balance > 500) console.log("test"); // not recommended// implicit scope, will execute only in one line(or you can use comma[,] to write in the next line) 
// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200"); // this will print
// }

const userloggedin = true
const debitcard = true
const loggedinfromGoogle = true
const loggedinfromEmail = false
if(userloggedin && debitcard){
    console.log("allowed to purchase");
}
if(loggedinfromEmail || loggedinfromGoogle){
    console.log("User Logged in");
    
}









// node 04_control_flow/one.js