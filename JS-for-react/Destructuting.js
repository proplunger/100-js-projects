let Array = ["apple", "banana"];

let [a, b] = Array;

console.log(a, b);

// skipping values
let Array1 = ["aye", "yo", "come", "look", "at", "this"];
let [x, ,y, ,c,d] = Array1;
// leaving empty spaces or extra commas will vacate that values
// values will be skipped

console.log(x,y,c,d);

let [val1, val2, ...newArray] = Array1; // val1, 2 are assigned and newArray stores rest of the elements of Array1
// another use of spread operators
console.log(newArray);