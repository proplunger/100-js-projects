let numbers = [1,2,3];

console.log(numbers);
// this array also has a prototype, which is an array and not an object

// we can change the data type of the prototype

function hello(){
    console.log("hello");
}

console.log(hello.prototype); // empty object is the prototype

hello.prototype = [] // now the prototype is an array.
console.log(hello.prototype); 

// this prototype can now be used as an array.
hello.prototype.push(1,2);
console.log(hello.prototype); 