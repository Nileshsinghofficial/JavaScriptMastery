const name = "nilesh"
const repoCount = 20
/* ``=> Backticks */
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('nil-esh')
// console.log(gameName.__proto__); // object outputs
// console.log(gameName[1]); // output => i
// console.log(gameName.length); // nilesh length => 6
// console.log(gameName.toUpperCase()); // Change string into upper case.
// console.log(gameName.charAt(2)) //search according index number (l)
// console.log(gameName.indexOf('l')) // find position according characters (2)
const myString = gameName.slice(-6, 3) // slice using index number, postive and negative both side.
console.log(myString);

const anotherString = gameName.substring(0,4) // not works as negative index.
console.log(anotherString) //

const newString = gameName.split('-') // split string
console.log(newString) //

const newstringOne = "  nilesh    " //trim remove extra space in string
console.log(newstringOne.trim())

const url = "https://nilesh.com/nilesh singh" 
console.log(url.replace(' ', '')) // using replace function remove spage in given our url
console.log(url.includes('singh')) // find sting present in url or not.

