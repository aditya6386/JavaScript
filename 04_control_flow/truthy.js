const userEmail = [] //[] this is supposed a truthy value i.e. if you use userEmail in "if" condition userEmail the condition is supposed to be true because userEmail is initialized with [] bracet
if(userEmail){
    console.log("got user email"); // this will execute
    
}else{
    console.log("don't have user email");
    
}

// here are some truthy value 
// //truthy values
// "0", 'false', " ", [], {}, function(){}

// and some falsy values which are supposed to be false as truthy
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


                                                        //to detect the object is empty or not 
                                                        // check its keys and make it array then check its length... example is given below
const emptyobj ={}

if(Object.keys(emptyobj).length === 0){        // when we add (emptyobj) it will be return as array then we are checking its length by ".length"
    console.log("object is empty");
    
}
 // *********************************//
// false == 0 it returns true
// false == '' it returns true
//  0 == '' it returns true

//****************************************** */ // Nullish Coalescing Operator (??): null undefined//************************************************ */
let val1;
// val1 = 5 ?? 10 // here 5 is assigned to val1
// val1 = null ?? 10 // because null is here 10 will assigned to val1
// val1 = undefined ?? 15 // here also 15 is assigned to val1

// mostly used in handling the null or undefined value
val1 = null ?? 10 ?? 20 // 10 is assigned to val1 not 20
console.log(val1);
/************************************** // Terniary Operator//****************************************** */

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
