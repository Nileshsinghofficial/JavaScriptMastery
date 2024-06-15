// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // name IIFE 
    console.log(`DB CONNECTED`);
}) ();  // use ; s  emi-colon stop this function

( (name) => {
    console.log(`DB Connected ${name}`);
} )('Nilesh');

