const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)


// console.log(marvel_heros.flat());

/* Spread method to concate array  */
const all_new_heros = [...marvel_heros,...dc_heros] // same just like concatnate
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); // array inside array change into single array

// console.log(Array.isArray("Nilesh")) // to check true/false
// console.log(Array.from("Nilesh")) // to convert into array
// console.log(Array.from({name: "Nilesh"})) // interesting  example its not convert....

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) // use of convert(variable, array) into array 
