let a = 100;     //available globally  can be used in any block of code 
var c = 200;
if(true){
    let a = 10;  // block scope variable only can be used in this praticular block only 
    const b = 20; 
    var c = 30; // can be used in any block of code or same block of code, it is the property of var
}
// console.log(a); // it will print the 100 because let a = 100 initialized as global variable where as let a = 10; initialized as block scope variable 
// console.log(b);
// console.log(c); // it will update the value of c from 200 to 30 because variable initialized with var can be used globally in any block of code 


function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        // console.log(username); // it can access the username from the function one(), because function two(), is a sub function of one(), so two() can access the variables of one()
    }
    // console.log(website); //it can not access the website because website is initialized in a block of a sub function and parent function is trying to access it (not possible)
    // two()
}
// one()

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website ="youtube"
        // console.log(username + website); // it will print the adityayoutube because it can access the username from parent function
    }
    //  console.log(website);// it can not access the website because website is initialized in a block 
    
 }
//  console.log(username);  // it is trying to access the username outside the block so, it will not execute
console.log(addone(5));
function addone(num){      // way to initialize a function but by this you can use or execute the addone() function before declaration
    return num + 1
}


const addTwo = function(num){ // other way to declare the function 
    return num + 2
}
console.log(addTwo(5));


