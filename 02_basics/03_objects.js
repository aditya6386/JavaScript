// singleton   -- when the object is declared as a  constructors it will be singleton 
// object.create -- used to declare the object as constructor 
// object literals --
                  // --- these two are the ways to declare the objects ---
    //Declaring symbol
   const mySym = Symbol("key1") 
    // object literals 
    const jsUser = {
    name: "aditya",
    "full name": "aditya patel",
    age: 18,
    location: "lucknow",
    email: "aditya@google.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}
console.log(jsUser.email)
console.log(jsUser["full name"]) // we cannot access the full name by using  (jsUser.fullname)  because it's declared as a string
