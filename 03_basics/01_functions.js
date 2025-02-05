function saymyName () {    //function
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
// saymyName()                // code to execute the function  //for only taking reference remove ()
function addTwoNumbers(number1, number2) {
    // let result = number1+number2
    // return result                     
    //or we can directly return the addition of these two number by 
    return number1 + number2
    // console.log(result);  //unreachable code because after returning the function no other code will be exucuted
    
}
const result = addTwoNumbers(3, 5)
// console.log("result:", result);
function loginUserMessage(username = "sam"){  //sam is a default value if the username is given below then that will be printed otherwise sam will be printed
    if(username === undefined){          //  if(username === undefined) = if(!username) both are equal
        console.log("Please enter the user name ");
        return // here it is used so that if the username = undefined then the next return(return `${username},just loggedin`) will not be executed
    }
    return `${username},just loggedin`
}
// loginUserMessage("aditya") //this will not print any thing only gives the reference of the loginUserMessage
// console.log(loginUserMessage("aditya")); //--output -- aditya,just loggedin
// console.log(loginUserMessage()) // -output -- undefined,just loggedin
