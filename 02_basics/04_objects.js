//const tinderUser = new Object();  // this is a singleton object 
const tinderUser = {}; // this is a non singleton object
tinderUser.id = "123abc",
tinderUser.name = " Aditya",
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "aditya@gmail.com",
    fullname: {                          // nested object entities
        userfullname: {
        firstname: "aditya",
        lastname: "patel"
    }
  }                            // node 02_basics/04_objects
}
// console.log(regularUser.fullname);  -- output-- { userfullname: { firstname: 'aditya', lastname: 'patel' } }
// console.log(regularUser.fullname.userfullname.lastname); //  -- output -- aditya
// console.log(regularUser.email);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// console.log(obj3);            output -- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } printed obj1 and obj2 seperately
// const obj3 = Object.assign({}, obj1, obj2) //here we should use {} it will combine the values and gives the guarented result{}...search object assign mdn on google for more 
const obj3 = {...obj1, ...obj2}        //... is a spread operator it will spread all the values and then. combine them in obj3.
// console.log(obj3);               //output -- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  printed obj1 and obj2 combined.
         // -- we will use this syntax when the values from database--
                           //data comes from databse in the form of the users as array of objects //
const User = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 2,
    email: "a@gmail.com"
  },
  {
    id: 3,
    email: "a@gmail.com"
  },
]
User[1].email  //use for accessing the values from the User

//now go back to tinder user object

// console.log(tinderUser); //output -- { id: '123abc', name: ' Aditya', isLoggedIn: false }--
// //Important//     
// console.log(Object.keys(tinderUser)); //output -- [ 'id', 'name', 'isLoggedIn' ]--// the datatype of the output value will be array...here we are taking all the keys an put it into the array, now we can do some operations on it such as loops etc.
// console.log(Object.values(tinderUser));//output--[ '123abc', ' Aditya', false ]-- //same as keys
// console.log(Object.entries(tinderUser)); //output--[ [ 'id', '123abc' ], [ 'name', ' Aditya' ], [ 'isLoggedIn', false ] ]--//it makes the seperate array which includes key values
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output--true--//Determines whether an object has a property with the specified name
// console.log(tinderUser.hasOwnProperty('isLogged')); //output --false--
 

                                  //--Destructuring of objects-- 

const course ={
  coursename:"Js",
  price: "999",
  courseInstructor: "hitesh"
}
// course.courseInstructor
const{courseInstructor:Instructor} = course; //destructuring the courseInstructor as Instructor result will be same 
// console.log(courseInstructor);
//console.log(Instructor);
               //--json format--
// {
// "name": "aditya",
// "coursename": "Js",
// "price": "free"
// }
// [
//   {

//   },
//   {

//   },
//   {

//   }
// }
