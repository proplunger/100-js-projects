//methods
// functions inside objects

const person = {
    name: "Harshit",
    Age: 21,
    about: function(){
        console.log(`${this.name}'s age is ${this.Age}.`);
    }
}

person.about();

const person1 = {
    name: "Rahul",
    Age: 19,
}

person.about.call(person1);

// arrow function's this is taken from surrounding, i.e it takes its "this" from one level up

const user = {
    name: "kishan",
    func: () => {
        console.log(this);
    }
}

user.func(); // here this is one level up i.r the window.

// proto, prototype, class

const client = {
    firstName: "Sunil",
    lastName: "Gavaskar",
    email: "goneforaduck@gmail.com",
    age: 65,
    address: "gully ka gutter",
    about(){
        return `${this.firstName} is ${this.age} year's old and lives in ${this.address}`;
    },
    is18(){
        return this.age >=18;
    }
}

console.log(client.about());

// function that creates clients

function createClient (firstName, lastName, email, age, address){
    const newClient = {};
    newClient.firstName = firstName;
    newClient.lastName = lastName;
    newClient.email = email;
    newClient.age = age;
    newClient.address = address;
    newClient.about = function(){
        return `${this.firstName} is ${this.age} year's old and lives in ${this.address}`;
    }
    newClient.is18 = function(){
        return this.age >= 18;
    }

    return newClient;
}
console.log("hi");
const client1 =  createClient("Ravi","Rampaul","rr@gmail.com", 27, "trinidad");

console.log(client1);
console.log(client1.about());

// this is a nice way of creating new user but there is a shortcoming in this
// whenever the client is created the methods are made time after time
// millions of user will have these methods thus memory consumption will increase
// so we can do something like this:

const clientMethods = {
    about(){
        return `${this.firstName} is ${this.age} years old and lives in ${this.address}`;
    },
    is18(){
        return this.age >=18;
    }
}

function createNewClient(firstName, lastName, email, age, address){
    const newClient = {};
    newClient.firstName = firstName;
    newClient.lastName = lastName;
    newClient.email = email;
    newClient.age = age;
    newClient.address = address;
    newClient.about = clientMethods.about; // referencing the function at time to invocation
    newClient.is18 = clientMethods.is18;

    return newClient;
}
// now whenever we create a new user we can use already defined methods
// and invoke them, since the objects are reference type
// we just need to define them once and can use them without affecting the memory usage.

const client2 = createNewClient("Ram", "NamSatya", "RamNamSatya@gmail.com", 99, "Death Valley");

console.log(client2.about());

// this is again not quite optimized
// let's say we have thousands of methods
// when we create a user we need to manually invoke all those methods
// which is a tedious job and there can be a errors while doing all this
// so here is a work around

const obj1 = {
    key1: "val1",
    key2: "val2",
}

const obj2 = {
    key3: "val3",
    key4: "val4",
}

console.log(obj2.key4);
console.log(obj2.key1); // undefined

// i want to do something such that the key value pairs of obj1 should also
// be in the obj2.

const obj3 = Object.create(obj1);
console.log(obj3); // empty object
obj3.key5 = "val5";
console.log(obj3.key1); // val1 is the output, obj3 gets the key1 value from obj1
obj3.key1 = "unique"; // we can override the key as well
console.log(obj3.key1);

// here the proto of obj3 is obj1
// __proto__ ,[[prototype]] are same
// its completely different from prototype
console.log(obj3.__proto__); // this return obj1, i.e obj1 is proto of obj1

// now we'll solve our issue:

function createNewClient1(firstName, lastName, email, age, address){
    const newClient = Object.create(clientMethods);
    newClient.firstName = firstName;
    newClient.lastName = lastName;
    newClient.email = email;
    newClient.age = age;
    newClient.address = address;
    // now we dont need the below code, because we have made client methods as proto.
    //newClient.about = clientMethods.about; // referencing the function at time to invocation
    //newClient.is18 = clientMethods.is18;

    return newClient;
}

const chadClient = createNewClient1("Chad", "Alpha", "chadalpha@gmail.com", 25, "Chad, Africa");
console.log(chadClient);
console.log(chadClient.about());

// proto is a refernce object for a given object,
// it establishes a relationship b/w any two object


// Prototype

// In Javascript functions are also objects. (functions = functions + objects)
// for example:

function hello(){
    console.log("hello kutto1");
}

hello.myOwnProperty = "A Unique Value"; // we're assigning a key value pair to a function name hello
console.log(hello.myOwnProperty);
// A function can be treated as an object as well

//IMPORTANT
// function gives us a empty object which is called a "prototype".
// only functions provide prototypes

console.log(hello.prototype); // gices us an empty object

// now see the function createNewClient1
// where we had set the proto of the function as clientmethod object
// instead of making an extra object for this, we can use the prototype
// As every function gives us an empty object, we can use these object also called
// prototype as a __proto__ to achieve the same result.

function nayaClient(firstName, lastName, email, age, address){
    const newClient = Object.create(nayaClient.prototype);
    newClient.firstName = firstName;
    newClient.lastName = lastName;
    newClient.email = email;
    newClient.age = age;
    newClient.address = address;

    return newClient;
}

nayaClient.prototype = clientMethods;
nayaClient.prototype.sing = function (){
    console.log("Raat di gedi gal risk di");
}

const punjabi = nayaClient("Diljit", "Dosanjh", "KylieKaSimp@juddi.com", 35, "Punjab");
console.log(punjabi.about());
punjabi.sing();

// new keyword

function createUser (firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(`${this.firstName}'s age is ${this.age}`);
}

const user1 = new createUser("Mikasa", 17);
console.log(user1);
user1.about();
// 1.) empty object
// 2.) return this
// 3.) Links proto to prototype

// so instead of manually setting proto to prototype by Object.create(f().prototype),
// we can use new keyword

// constructor function
// whenever we declare a constructor function that can only be invoked using "new" keyword
// Its a convention to make the first word capital of such functions.

function NayaClient1(firstName, lastName, email, age, address){
   // we don't need this line as we'll use new keyword for linking proto to prototype
   // const newClient = Object.create(nayaClient.prototype);
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;

    //return newClient;
    // we don't need this as well as new keyword automatically returns this{} object.
}

NayaClient1.prototype.about = function(){
    console.log(`${this.firstName}'s age is ${this.age} and lives in ${this.address}.`);
}

NayaClient1.prototype.gaana = function(){
    console.log(`Oh dil da ni maada !`);
}

const dead = new NayaClient1("Siddhu", "Moosewala", "jattda@muqabla.com", 29, "lawrence garden");
dead.about();
dead.gaana();

for(let key in dead){
   // console.log(key);
   if(dead.hasOwnProperty(key)){
    console.log(key);
   }else{
    console.log("Prototype's property:", key);
   }
}
// this also gives the keys of the prototype.
// Let's say we don't want that, we can use .hasOwnProperty()