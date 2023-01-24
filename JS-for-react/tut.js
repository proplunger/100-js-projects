//Normal Function
export default function DoSomething(){
    //Do Something
}

//Arrow Functions, can be defined with Const, Let or var.
// You can export these types of functions in a different way.
// React has components which are basically functions.

export const DoSomething = () => {

}

//example of a react component
const MyComponent = () => {
    return <div></div>
}

//anonymous functions
<button onClick = { () => {
    console.log("Hello brother");
}}></button>

//Working with conditionals using ternary functions
let age = 16;
let name = "Joji";

// conventional way of writing this 
if(age > 10){
    name = "Joji";
}else{
    name = "Pink Guy";
}

// making use of ternary ops
// shorthand notations for doing if statements
let newAge = 17;
let newName = newAge > 10 ? "Joji" : "Pink Guy"; //can read '?' as if and ':' as else

const Component = () => {
    return (age > 10 ? <div>Joji</div> : <div>Pink Guy</div>);
};

// IMPORTANT STUFF RELATED TO objects
// destructuring an object
const Person = {
    Name: "Pedro",
    Age: 20,
    isMarried: false,
};

// Ineffiect way:
//const Name = Person.name;
//const Age = Person.Age;
//const isMarried = Person.isMarried;

//using destructuring properties of objects

const {Name, Age, isMarried} = Person;

//sort of inheritance

const Person2 = {...Person, Name: "Joji"};

const Array = ["kutta", "Billi", "Saanp"];
const Array2 = [...Array, "Haathi"];

//3 Fundamental functions of JavaScript Arrays
// Map, Filter, Reduce

//Map
Array.map((name) => {
    return name + "1";
});

//Filter
 const Array3 = [...Array2, "Kutta", "kutta"];

 Array3.filter((name) => {
    return name !== "kutta";
 });


//Async, Await, Fetch
