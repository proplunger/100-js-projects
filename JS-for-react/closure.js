// a function returning function

function parent(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }

    return printName;
}

const ans = parent("rohit", "sharma");

ans();

// here the printName function returns with its lexical environment 
// (i.e parent functions argument values which were in the local memory)
// this is called closure

// example 1

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const eg1 = hello("example1");
eg1();

// task
// make a exponentiation function using closures

function power(x){
    return function(y){
        console.log(y ** x);
    }
}

const square = power(2);
square(6);

// task 2
function call(){
    let x = false;
    return function(){
        if(!x){
            console.log("Hi, You called me !!"); x = true;
        } else {
            console.log("mai already ek baar call ho chuka hu");
        }
    }
}

const myfunc = call();
myfunc();
myfunc();

const func2 = call();
func2();
func2();
