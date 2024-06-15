let a  = 200 //Global scope value

if(true){
    let a = 10 // inner scope value
    const b = 20
    var c = 30
    // console.log("Inner: ",a);
}
// console.log(a);
// console.log(b);
// console.log(c); // in scope var value print in console value.

function one(){
    const username = "Nilesh"
    // console.log(username);

    function two(){
        const websitename = "ccsufest.tech"
        // console.log(websitename);
    }
    // console.log(websitename);

    // two()
}

// one()

if(true){
    const username = "nilesh"
    if(username==="nilesh"){
        const  website = "ccsufest.tech"
        console.log(username +" " + website)
    }
    // console.log(username);
}
// console.log(username);

//  +++++++++++++++++ Interseting Concepts +++++++++++++++

// console.log(addone(5)) // in this function decleartion method we use before console method.
function addone(num){
    return num + 1   
}

// addone(5)

// console.log(addTwo(6)); // In this function decleartion method we got error before give console
const addTwo = function(num){
    return num + 2
}

// addTwo(5)