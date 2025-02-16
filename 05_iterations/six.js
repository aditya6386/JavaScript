// const coding = ["js", "java", "ruby", "python", "cpp"]
// // we can store the for each loop(storing in values)
// const values = coding.forEach( ( item ) => {
//     console.log(item);
//     return item // output undefined for each didn't return any value
// })

// console.log(values); // it will give the undefined output (didn't returned anything) because for each did not return value

const myNum = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 , 10]

// filter is used to return the values by checking the given condition (for each loop is also similar operation but didn't return the values)
// const newNums = myNum.filter( (num) => num > 4 ) //it checks the condition and the values which are greater than 4 are returned
// const newNums = myNum.filter( (num) =>{ //***********when we use curly braces we need to ise return keyword to return the value */
//     return num > 4
// })
// console.log(newNums);

//*********. BY USING FOR EACH LOOP. *************/ by using this trick we return the values by using for each loop 
// const newNums = []
// myNum.forEach( (num)=>{
//     if(num > 4){
//         newNums.push(num)  
//     }
// } )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter( (bk) => {
    return bk.genre === 'Fiction'
  } )
  let userbooks2 = books.filter( (bk) => {
    return bk.genre === 'Fiction' && bk.publish === 1987
  } )

  userbooks = books.filter( (bk) => bk.genre === 'Fiction' )
  console.log(userbooks2);
  
