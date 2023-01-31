// arrays are recognized as objects
// they are reference data type

let array1 = ["kutta", "Billi", "Saand"];

console.log(typeof(array1));
console.log(array1);

// arrays can contain any data types (primitive and non-primitive)
// arrays can contain other arrays as well

// reference nature of Arrays
// push, pop, shift, unshift

let array2 = array1;

array1.push("murga"); // adding murga in array 1 at the end
console.log(array1);
console.log(array2); // even though we've made changes only in array1, array2 also changes

// push is used to push any element at the end (last index of the array)
array1.push(1);
console.log(array1);

// pop is used to pop the last element of the array
// the element push is also returned by the pop() function

console.log(array1.pop());

// shift, is used to shift all the element by one index except the 0th index element
// in other words the first element is poped off

console.log(array1.shift());
console.log(array1);

// unshift is used to add an element at the 0th index in the array
// this also shifts the previous indexes by one place

array1.unshift(null);
console.log(array1);

// cloning an array
// here are various ways of cloning the arrays
let array3 = ["kutta", "Billi", "Saand"]; // this very ineffecient way of cloning
console.log(array3);
let array4 = [].concat(array1); // we concatenate the array we want to clone into an empty array
console.log(array4);

let array5 = array1.slice(0); // using slice to slice the array
console.log(array5);

// the most used technique
// spread operator (...)
let array6 = [...array1];
console.log(array6);

let newArray = [...array6, "newItem"];
console.log(newArray);

let A = [...newArray, ...array6];
console.log(A);
console.log(A.length);

for( let i=0; i<A.length; i++){
    console.log(A[i]);
}

// use const for declaring arrays
// most js developers use const for declaring arrays, its a good practice.
// as its a reference data type the memory address allocated on declaration is not changed
// or freed unless the object is destroyed so, that is why using 'const' keyword makes a lot of sense
const fruits = ["Mango", "Apple", "Banana"];

// for of loop:
// most used loop, because of how easy to read it is
console.log("for of loop:");
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop:
// gives index
for(let index in fruits){
    console.log(index);
    console.log(fruits[index]);
}