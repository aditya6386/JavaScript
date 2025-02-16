const myNums = [1, 2, 3]
// const mytotal = myNums.reduce( function (accumulator, currentValue) { // here accumulator value is 0 and the current value is taken from the array one by one which is 1
//     console.log(`accumulator is ${accumulator}, currentValue is ${currentValue}`);
//     return accumulator + currentValue
// }, 0/* here we paas the value for accumulator as 0 or can be any value */)
// console.log(mytotal);  
// // output 
// // accumulator is 0, currentValue is 1
// // accumulator is 1, currentValue is 2
// // accumulator is 3, currentValue is 3
// // 6

// const mytotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(`accumulator is ${accumulator}, currentValue is ${currentValue}`); this will not execute because accumulator and current value is limited in reduce() only
// console.log(mytotal);

// TO PRINT  ACCUMULATOR AND CURRENTVALUE IN EACH ITERATION WE SHOULD USE

// const mytotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator is ${accumulator}, currentValue is ${currentValue}`)
//     return accumulator + currentValue }, 0)
//     console.log(mytotal);
    
//ASSIGNMENT ADD THE AMOUNT OF CART//
const cart = [
{
    courseName: "Python",
    price: 1299
},
{
    courseName: "java",
    price: 2299
},
{
    courseName: "Appdev",
    price: 3299
}
]

const priceToPay = cart.reduce( (accumulator, num) => accumulator + num.price, 0) 
console.log(priceToPay);


