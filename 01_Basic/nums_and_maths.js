 const balance = new Number(100)
//  console.log(balance.toFixed(2));  // fixed decimal to digits
//  console.log(balance.toString().length);// Change into string

 const newNumber = 123.877
//  console.log(newNumber.toPrecision(4)) // roud off at four position value

 const hundreds = 1000000
//  console.log(hundreds.toLocaleString('en-IN'));


//  ++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math); 
// console.log(Math.abs(-4)); // Change into postive in value
// console.log(Math.round(4.49)); // change in round off 
// console.log(Math.ceil(44.3)); // ceiling value like 44.3 => 45
// console.log(Math.floor(44.2)); // floar value like 44.3 => 44
// console.log(Math.min(3,5,6,4,3)); // Select minumum value
// console.log(Math.max(7,4,5,2,3)); // Select Maximum value
/* Random value lie b/w 0 to 1 and multiplay with 10 */
// console.log((Math.floor(Math.random()*10)) + 1);

const min = 20
const max = 40
/* at least upper to 20 got random value */
console.log(Math.floor(Math.random() * (max - min + 1)) + min);