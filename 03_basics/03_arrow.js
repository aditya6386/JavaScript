// const user = {
//     username: "aditya",
//     price : 999,


// welcomeMessage: function(){
//     console.log(`${this.username}, welcome to website`); //this will get the value from the current context(values or variables)
//     console.log(this); // will print the current context as aditya username and after updation as sam 
       
// }
// }  
// user.welcomeMessage() //--output-- aditya, welcome to website
// user.username = "sam"
// user.welcomeMessage() //--output-- sam, welcome to website // values will be updated
// console.log(this); // this will print the empty object {} because there is no current context in global 
//               -- the context of this will work only in objects not in function --
// function chai(){
//     let username = "aditya"
//     console.log(this.username); //output -- undefined 
// }
// chai()

// const chai = function(){
//     let username = "aditya"
//     console.log(this.username);
// }
                                            //arrow function
// const chai = () => {  
//     let username = "aditya"
//     console.log(this.username);  // output --undefined 
// }
// chai()

// const addTwo = (num1, num2) =>{     // if we use curly braces then we need to write return to return the values
//     return num1 + num2            // this is a explicit return (when we use return keyword it is known as explicit return)
// }
// console.log(addTwo(3, 4));
                      //OR             
const addTwo = (num1, num2) => (num1 + num2) //OR  const addTwo = (num1, num2) => num1 + num2   
console.log(addTwo(3, 4));

// // when we need to return the object
// const addTwo =(num1, num2) => ({username: "aditya"}) // to return the object we should wrap the object in " () "

// console.log(addTwo());

