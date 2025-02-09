//                                   IMMEDIATELY INVOKED FUNCTION EXPERSSIONS
//some times Problem occurs from the global scope variable.... to remove the pollution of global scope variables we use IIFE
(function chai(){
    // Named IIFE function
    console.log(`DB CONNECTED`);  // adding complete function in () is the syntax of IIFE
})(); 
// make sure to add semi colon if you want to add one more IIFE function after that
//unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("aditya")
