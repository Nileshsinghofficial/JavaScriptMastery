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

const chai = function(){
    let username = "nilesh"
    console.log(this.username); // this function not print username here he work in object as well.
}

// output => undefined
chai()