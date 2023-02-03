// Map
// Map is an iterable
// it is different from .map array method
// stores data in ordered way
// Key value pair is stored and hence has unique key

// differnce b/w objects and map:
// objects can only have strings or symbol as key,
// whereas maps can have anything as a key i.e array, num, string, char etc.

const person = new Map();
person.set("firstName", "Kr$na");
person.set("Age", 22);
console.log(person.get("Age"));
console.log(person.keys());
person.set([1,2,3,4], "oneTwoThreeFour");

for(let key of person.keys()){
    console.log(key,person.get(key));
}

for(let [key,value] of person){
    console.log(Array.isArray(key));
    console.log(key,value);
}

const person1 = new Map([["firstName", "Raju"], ["Age", 22], [1, "one"]]);
for(let [key,val] of person1){
    console.log(`${key} : ${val}`);
}

const Obj = {
    id: 1,
    firstName: "Harshit",
}

const extraInfo = new Map();
extraInfo.set(Obj, {age: 8, gender: "male"});

console.log(extraInfo.get(Obj));

console.log(extraInfo.get(Obj).gender);

console.log(extraInfo.get(Obj).age);

// cloning in Obj

const Obj1 = {
    key1: "val1",
    key2: "val2",
}

//const Obj2 = Obj1;

const Obj2 = {...Obj1}
const Obj3 = Object.assign({}, Obj1);

Obj1.key3 = "val3";

console.log(Obj1);
console.log(Obj2);
console.log(Obj3);
