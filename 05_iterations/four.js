
// implementing for in loop on object as for of loop doesn't work on object
// node 05_iterations/four.js
// const myObject = {
//     js: "javascript",
//     cpp: "C++",
//     py: "python"
// }

// for (const key in myObject) {
//    console.log(`key => ${key} is a shortcut for ${myObject[key]} `);
   
// }

const programming =["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
// console.log(key);                                                // it will return keys as index not array elements
                                                                       //output        
                                                                    //                0
                                                                    //                1
                                                                    //                2
                                                                    //                3
                                                                    //                4
// console.log(programming[key]);                                   // it will return array elements 
                                                                    // output
                                                                    // js
                                                                    //    rb
                                                                    //    py
                                                                    //    java
                                                                    //    cpp
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in object) {
    console.log(key);           // maps are not iterable it will not return anything
    
}
