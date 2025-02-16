// node 05_iterations/five.js
// for each loop

const coding = ["js", "java", "ruby", "python", "cpp"]
// coding.forEach(function (languagues){      // just give a functions to the for each loop 
//  console.log(languagues);                 //and a var in which that functions calls the values of array one by ont automatically
 
//})    //output -- js
                    // java
                    // ruby
                    // python
                    // cpp
//************************************8/By using arrow function/**************************************//
// coding.forEach( (items) => {      
// console.log(items);
 
// })

// To pass on any function in " for each loop "
function printMe(item) {
    // console.log(item);
} 
// give only reference do not execute by adding () it will be executed automatically
// coding.forEach(printMe)

// some more features in For Each Loop
coding.forEach((item, index, arr)=>{
    // console.log(item,index,arr); // it will print tems, index and the complete array
})
// output
// js 0 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
// java 1 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
// ruby 2 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
// python 3 [ 'js', 'java', 'ruby', 'python', 'cpp' ]
// cpp 4 [ 'js', 'java', 'ruby', 'python', 'cpp' ]

//*****************************************IMPORTANT****************************************/
//USEFUL WHEN ACCESSING THE DATA FROM DATABASE IN WHICH THE DATA IS RETREIVING IN THE ARRAY of OBJECTS

myCoding = [
    {
        LanguageName: "javascript",
        languagefile: "js"
    },
    {
        LanguageName: "python",
        languagefile: "py"
    },
    {
        LanguageName: "java",
        languagefile: "java"
    }
]
myCoding.forEach((item)=>{
    console.log(item); //this will print all the objects 
    console.log(item.languagefile); //this will print all the language files
    console.log(item.LanguageName); //this will print all the language names
    
})