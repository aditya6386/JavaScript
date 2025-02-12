// 1.singleton   -- when the object is declared as a  constructors it will be singleton 
// object.create -- used to declare the object as constructor 
// 2.object literals --
                  // --- these two are the ways to declare the objects ---
    //Declaring symbol
   const mySym = Symbol("key1") 
    // object literals 
    const jsUser = {
    name: "aditya",
    "full name": "aditya patel",
    [mySym]: "mykey1", //(symbol should be declared by using '[]' otherwise it will be declared as string, to access it use console.log([mySym]))
    age: 18,
    location: "lucknow",
    email: "aditya@google.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}
// console.log(jsUser.email)
// console.log(jsUser["full name"]) // we cannot access the full name by using  (jsUser.fullname)  because it's declared as a string
// console.log(jsUser[mySym]) // output --- mykey1
 // -- to change or update the values --
//  jsUser.email = "adityapatel@google.com",
//  console.log(jsUser.email);
// Object.freeze(jsUser) // Now we cannot update the object because the object is freezed 
// jsUser.email = "adityapatel@flipkart.com" //this will not execute because the object jsUser is freezed
// console.log(jsUser.email);
// jsUser.greeting = function(){
//     console.log("Hello jsUser");
// }
// console.log(jsUser.greeting()); //this will print hello jsUser
// console.log(jsUser.greeting); // --output-- [Function (anonymous)] // here function didn't executed but we got the reference of the function 

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.name}`); //this is used to refer the name inside the jsUser function
}
// console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
//.              --most of the time we use dot( . ) for accessing the value but in some cases we use square bracets []--