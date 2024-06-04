let score = ""
console.log(typeof(score))
/* Convert String to Number */
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)  // Result Nan got


let scores = null
console.log(typeof(scores))
/*convert null into number */
let valueInNumbers = Number(scores)
console.log(valueInNumbers)   // 0 Results got
console.log(typeof(valueInNumbers))

/* Convert into number */
//  "33" => 33
//  "33abc" => Nan
//  null => 0
// true => 1;  false => 0
// "" => 0

/* Boolean Converts */
let isLoggedIn = "Nilesh"
let isLoggedInBoolean = Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(typeof(isLoggedInBoolean))