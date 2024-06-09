//  array
const myArr = [1,2,3,4,5,6,7]
// console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(7) // push element in last position
// myArr.pop() // Pop last element of array

// myArr.unshift(8) // value placed in start position
// myArr.shift() //remove first placed value in start position
// console.log(myArr.includes(6)) // search by nuber, character and got answer in form true/False.
// console.log(myArr.indexOf(3)) // search by index numbers

const newArr = myArr.join() // arry => change into string
// console.log(newArr);
// console.log(myArr);

// slice,  splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // start to n-1 position of array
console.log(myn1);
console.log("B", myArr);

/*Splice */
const myn2 = myArr.splice(1,3) //start to n position of array and extract from original array
console.log(myn2);
console.log("C ", myArr)