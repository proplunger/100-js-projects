// callback functions

function name(){
    console.log("Billie, I love your work");
}
function hello(w){
    //console.log(`Hello ${w}!`);
    w();
}

hello(name);

// by convention we name the function passed as a parameter as "callback", hence the name callback function
const hater = (name1,name2) =>{
    console.log(`${name1}, I am ${name2} and I dispise you!`);
}
function hate(callback){
    callback("Billie", "Mandy");
}

hate(hater);

// functions returning functions

function func1(){
    return function(){
        return "Hello world";
    };
}

const ans = func1();

console.log(ans());