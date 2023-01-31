// objects, are like maps 
// values are stored in key value pairs

const person = {
    name : "Bheem",
    Age : 12,
    hobbies : ["Laddu", "Chutki", "Indumati"]
}

console.log(typeof(person)); //object

console.log(person.name);
console.log(person.Age);
console.log(person.hobbies);

console.log(person.hobbies[2]);

// assigning new key value pairs to an object

person.isMale = true;

// how to iterate over values in the object
// the object in itself is not iterable i.e we cannot iterate using "for of" loop
for(let key in person){
    console.log(key, " : ", person[key] );
}

//obj.keys method
console.log("obj.keys method", Object.keys(person));

// in JS key's data type is string by default
// thats why in bracket notation we have to use ""
person["weight"] = 65; // here if we did not put "" around the property, it will throw an error
console.log(person.weight);

let key = "height";
let cm = 170;

person[key] = cm;
console.log(person.height);

for(let key in person){
    console.log(key, " : ", person[key] );
}

// task: (compute properties)
// const key1 = "objKey1"; const key2 = "objKey2";
// const value1 = "val1"; const value2 = "val2";
// use above to create object as below:
/* const obj {
    objKey1 : val1,
    objKey2 : val2
}*/

const key1 = "objKey1"; const key2 = "objKey2";
const value1 = "val1"; const value2 = "val2";

const obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);

for(let key in obj){
    console.log(key, " : ", obj[key]);
}

// another way (computed properties):
const k1 = "k1";
const k2 = "k2";
const newVal1 = "hi";
const newVal2 = "bye";
const newObj = {
    [k1] : newVal1,
    [k2] : newVal2
}

console.log(newObj);

// spread operators in objects

const Dog = {
    activity: "bark",
    limbs: 4,
    eats: "dog food"
}

const Tommy = {...Dog};
console.log(Tommy);

const Sheru = {...Dog, name: "Sheru"};

console.log(Sheru);

const array = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(array); // here this string will get spread across subsequent indexes;

const ekNayaObject = {...[1, 2, 3]};// here the array elements get mapped to subsequent indexes
console.log(ekNayaObject);
