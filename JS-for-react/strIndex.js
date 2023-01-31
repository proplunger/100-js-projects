// basic string operations
let string = "IncomeMillionare";

console.log(string[8]);

console.log(string.length);

console.log(string[string.length - 1]);

// some string methods
// trim()
// toUpperCase()
// toLowerCase()
// slice

//trim, used for removing white-spaces
let firstName = "   Harshit   ";

console.log(firstName);
console.log(firstName.length);

let newString = firstName.trim();

console.log(newString);
console.log(newString.length);

// toUppercase and toLowercase

firstName = firstName.toUpperCase();
console.log(firstName);

newString = newString.toLowerCase();
console.log(newString);

//slice
let str = newString.slice(0,5);// trims from index 0 to 4
console.log(str);