// for of loop
// node 05_iterations/three.js
// [" ", " ", " "]      //strings stored in array
// [{}, {}, {}]         // objects stored in array. apply loop then by using "." notation access the elements of objects

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting= " hello world"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
    
// }

//****************************************/    MAP    /*************************************** */
// map object holds key - value pairs and remember the original order of keys and it has unique values
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('FR', "France")// this will not be printed because map includes only unique values
// console.log(map);
for (const key of map) {
    // console.log(key);   //printed key and value in the array
}
// now if we need to print the both key and values seperately
// here destructuring of array to seperate both key and value
for (const [key, value] of map) {
    // console.log(`${key} => ${value}`);
}

//trying to use for of loop on object 
const myObject = {
    "game1" : "BGMI",
    "game2" : "CODM"   
}
for (const [key, value] of myObject) {
    console.log(`${key} => ${value}`);  //TypeError: myObject is not iterable
        
}


