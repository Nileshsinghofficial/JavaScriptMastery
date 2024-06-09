// Primitive (call by value)

//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non Primitive)

/* Array, Object, Functions */

// Object
let My_obj = {
    name: "Nilesh",
    age: 32,
}

const My_fun = function(){
    console.log("HelloNileshSingh");
} 

// My_fun();

//  **********************************************
// Stack (Primitive),  Heap (Non-Primitive)

/* Stack access example */

let my_Youtubename = "nileshsinghofficial"
let anothername = my_Youtubename
anothername = "nilesh singh"
console.log(my_Youtubename);
console.log(anothername);

/* Heap Access Example */
let userOne = {
    email: "nigamsingh@gmail.com",
    upi: "nigam@paytm"
}

let userTwo = userOne;
userTwo.email = "nigamsingh888@gmail.com"

// console.log(userTwo);
// userTwo = {
    // email:"nileshsingh888@gmail.com",
    // upi :"nilesh@paytm"
// }
console.log(userOne);
console.log(userTwo); 