let age = 22;
let firstName = "harshit";

console.log(typeof(firstName));

// number to string
 age += "";

 console.log(typeof(age));


// string to number

firstName = +firstName;
let str = "20"; //string
str = +str;
console.log(firstName); //NaN
console.log(typeof(firstName)) //number

console.log(str); //34
console.log(typeof(str)); //number

let umar = "18";

umar = Number(umar);
console.log(typeof(umar));

umar = String(umar);
console.log(typeof(umar));

// string concatenation

let s1 = "Hi";
let s2 = "I need a job"

let mes = s1 + " " + s2;

console.log(mes);


//template string

let a = 22;
let Naam = "Killer";

let aboutMe = `My name is ${Naam} and my age is ${a}`;

console.log(aboutMe);

// undefined (var and let can be undefined but const cannot be)
// null

let w;
console.log(typeof(w)); //undefined

let L = null;
console.log(L);
console.log(typeof(null)); // this give object as output, which is a bug

// BigInt
let myNumber = 123;

console.log(Number.MAX_SAFE_INTEGER);

//ways of declaring big int
myNumber = BigInt(12345678985457);
let newNumber = 123n;

console.log(newNumber);

// comparison Operators
// ==, ===

let val1 = 10;
let val2 = "10";

console.log(val1 == val2); // this will output true
console.log(val1 === val2); // False

// == only compares the value not the data type
// === compares both value and data type

// falsy values
// false, null, 0, "", Undefined
// all other values except the above are truthsy

//ternary operators
let a1 = 18;
let drink = "";

drink =  a1 > 18 ? "coffee" : "milk" ;

console.log(drink);