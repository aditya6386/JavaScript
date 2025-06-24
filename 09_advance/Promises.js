const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // database calls  cryptography, netork
    setTimeout(function(){
        console.log('async task is completed'); // task completed
        resolve()                              // now resolve then it will consume promiseOne
    }, 1000)
})      
//promise created

// now promise comsumption
promiseOne.then(function(){        // .then is directly related to resolve explained in next 
    console.log("promise consumed");
})                    
                   //OR


new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "aditya", email:"adi1943524@gmail.com"})      //we can also pass the data in resolve mostly it would be object
    }, 1000)
})

promiseThree.then(function(user){  // in this function user is getting the data from resolve()
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username:"patel", email: "adi123@gmail.com"})
        } else{
            reject('Error:something went wrong');
        }
    }, 1000)
})

// below code will be execute when the error doesn't happen
promiseFour.then((user)=>{           // you cant access the user when rejection occurs for accesing it you needs to do chaining using then with handling the error using catch
    console.log(user);
    return user.username
}).then((username)=>{                // to get the data (username) we can do chaining of .then  
    console.log(username);
}).catch((error)=>{         // Use .catch() once at the end to handle any error that occurs in any .then() or in the original promise.  
    console.log(error);    // error can be username is not there or missing
}).finally(()=> console.log("The Promise is either resolved or rejected"));

