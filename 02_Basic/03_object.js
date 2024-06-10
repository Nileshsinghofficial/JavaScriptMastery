// literal and constructur

// singleton = > literal se singleton nahi banta hai
// Object.create

//object literals

/* Symbol Access */

const mySym = Symbol("Key1")

const JsUser = {
    name: "Nilesh",
    [mySym]:"myKeys1",
    age: 18,
    location: "jaipur",
    email:"nileshsingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]) //Square notation access method "name" object properties.
// console.log(JsUser[mySym]) //access symbol using this method

// JsUser.email = "nigamsingh@google.com"
// Object.freeze(JsUser) // freeze the object they not allow to changes example is just below.
// JsUser.email="nilesh@apple.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

console.log(JsUser.greeting());