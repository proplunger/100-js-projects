// Declaring
function SayHello(){
    console.log("Hello");
}

// invoking
SayHello();

// function expression
// assigning a anonymous functions to a var or a const etc.
const isEven = function(num){
    return(num % 2 === 0);
}

console.log(isEven(5));

// arrow functions (used a lot in JS libs and frameworks)

// default parameter
const addTwoNum = (n1,n2=0) => {
    return n1 + n2;
}

console.log(addTwoNum(2,3));
console.log(addTwoNum(9));

// hoisting
bol();
function bol(){
    console.log("hello hoisting");
}

// functions inside functions

const app = () => {
    console.log("inside app");
    function func(){
        console.log("inside func");
    }
    func();
}

app();

// lexical scope

const myApp = () => {
    const val = 123;
    Beta();
    function Beta(){
        const val = 154;
        console.log("inside Beta:", val);
        // checks for value of val in its lexical scope
        // hierarchical manner, if we comment the val here it picks up the global value or value in parent scope
    }
    console.log("inside myApp:", val);
}

myApp();

// block scope vs function scope

{
    var another = 100;
    let g = "garryV";
    console.log(g);
    // 'var' is function scope
    // let another, const another are not globally accesbile
    //const seggs = 99;
    // They are Block Scope (let and const)
    // only accessible inside the block they're declared in
}

console.log(another); // var is function scope.


// rest parameters

const myFunc = (a,b,c,...rest) => {
    console.log(a,b,c,rest);
    //console.log(rest);
}

myFunc(3,4,5,6,7,8,9);

const addAll = (...b) => {
    let ans = 0;
    for(let i in b){
        ans += b[i];
    }
    console.log(ans);
}

addAll(5,6,7,8,9,10,100);