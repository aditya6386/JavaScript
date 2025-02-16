// const myNumbers =[1,2,3,4,5,6,7,8,9,10]
// const newNum = myNumbers.map( (num) => {
//     return num + 1
// })
// console.log(newNum);
// //*************************. OR. ********************************//
// const myNumbers1 =[1,2,3,4,5,6,7,8,9,10]
// const newNum1 = myNumbers.map( (num) => num + 10)
// console.log(newNum1);


//++++++++++++++++CHAINING OF FUNCTIONS++++++++++++++++++++++++++++++++++//

const myNum =[1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.map((num) => num * 10 )         //OUTPUT => [10, 20, 30, 40,  50, 10, 20, 30, 40]
                    .map( (num)=> num + 1 )          //OUTPUT => [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
                    .filter( (num) => num >= 40 )    //OUTPUT => [ 41, 51,  61, 71, 81, 91, 101]
// firstly num * 10 = 1*10 = 10...now next map()will be applied on 10 so it will be 11 now if 11 >=40 it will be returned
console.log(newNum);
