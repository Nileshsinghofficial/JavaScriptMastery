const user = {
    username: "Nilesh Singh",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`); // this use context value
       console.log(this);
    }

}

// user.welcomeMessage() 
// user.username = "nigamsingh" 
// user.welcomeMessage() 

// console.log(this);

// function chai(){ 
//     let username = "nilesh"
//     console.log(this.username); // this function not print username here he work in object as well. 
// }

// Outpur => Undefined

// const chai = function(){
//     let username = "nilesh"
//     console.log(this.username); // this function not print username here he work in object as well.
// }

// output => undefined

/* Arrow Function */

// const chai = () =>  {
//     let username = "nilesh"
//     console.log(this.username);
// }

// // chai()

/* Basic Arrow Function */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* Implict Return Array Function */
// const addTwo = (num1, num2) => num1 + num2 //in one line print . remove return function

// const addTwo = (num1, num2) => (num1 + num2)
// *Note => if we use parenthasis ( ) then should be use return keywords.

// in object we must use ( ) and delcere object inside.

const addTwo = (num1, num2) => ({username:"Nilesh Singh"})

console.log(addTwo(2,3)); 

// arrrow function 

const myArray = [2, 3, 4, 5, 6, 7]
myArray.forEach(()=> {} )