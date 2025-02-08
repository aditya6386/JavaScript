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
    // return number1 + number2
    // console.log(result);  //unreachable code because after returning the function no other code will be exucuted
    
}
const result = addTwoNumbers(3, 5)
// console.log("result:", result);
function loginUserMessage(username = "sam"){  //sam is a default value if the username is given below then that will be printed otherwise sam will be printed
    if(username === undefined){          //  if(username === undefined) = if(!username) both are equal
        // console.log("Please enter the user name ");
        // return // here it is used so that if the username = undefined then the next return(return `${username},just loggedin`) will not be executed
    }
    // return `${username},just loggedin`
}
// loginUserMessage("aditya") //this will not print any thing only gives the reference of the loginUserMessage
// console.log(loginUserMessage("aditya")); //--output -- aditya,just loggedin
// console.log(loginUserMessage()) // -output -- undefined,just loggedin
function calculateCartPrice1(...num2){ //using ... to combine all the data and give it to the num1 and it stores the data in array
    // return num2
}
// console.log(calculateCartPrice1(200,400,500)); // all the values will be stored in the num2 in the form of array


function calculateCartPrice(val1, val2, ...num1){ //using ... to combine all the data and give it to the num1 and it stores the data in array
    // return val1          // it will print 200 not in array
    // return num1             // it will print [500] in array because of ...num1
}

// console.log(calculateCartPrice(200, 400, 500)); //200 and 400 will be stored in val1 and val2 and the remaining 500 will be stored in num1

                        //--- passing object to the function ---
const user = {
    username: "aditya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "adi",         //passing object directly
    price: 499               //output --Username is adi and the price is 499
})

const myNewArray = [200, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));           // -- output-- 400
console.log(returnSecondValue([200,800,600,100]));    //passing array directly-- it will print the second value of given array in the log --output 800


