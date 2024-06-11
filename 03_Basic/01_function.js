

function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName(); 

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

// const result = addTwoNumber(3,4)
// console.log("Result:", result)


// How to get Return in function

function addTwoNumber(number1, number2){
    // let result =  number1 + number2
    // return result  
    return number1 + number2
}

const result = addTwoNumber(3, 5)
// console.log("Result: ", result)

function loginUserMessage(username = "John"){  // give a default user name if not give a user name in function
    // if(username === undefined){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} Just logged In `
}

// console.log(loginUserMessage("Nilesh"))
console.log(loginUserMessage());