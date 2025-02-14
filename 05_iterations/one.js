//****************************************/ for loop *********************************************//node 05_iterations/one.js
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
    // console.log(i);
    }
    // console.log(element);
    
}

for (let i= 0; i< 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value ${i}`);
        // console.log(i, '*', j, '=', i*j);
    }

    
}

let myArr = ["ronaldo", "messi", "speed"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
    
}