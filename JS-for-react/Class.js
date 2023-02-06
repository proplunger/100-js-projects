// in 2015/ ES6 "class" keyword was added to javascript.

// so the tedious work of linking proto to prototype and using this keyword and new keyword etc.
// is made easier by using this class keyword.
// internally the work is being done like how we use to do using prototyping.

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called.")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age =age;
        this.address = address;
    }

    is18(){
        return this.age >= 18;
    };
    about(){
        console.log(`${this.firstName} is ${this.age} and lives in ${this.address}`);
    };
    sing(){
        console.log("14 saal meri umar thi haan, pata chala meri likhayi me hunar thi haan")
    };
}

const Kr$na = new CreateUser("krishna", "Kaul", "kaul@kalamkaarmusic.com", 35, "Kashmir");
// we cannot create an object without using the new keyword.

console.log(Kr$na);
Kr$na.sing();
Kr$na.about();

// inheritance

class Rapper extends CreateUser{
    constructor(firstName, lastName, email, age, address, income){
        super(firstName, lastName, email, age, address);
        this.income = income;
    }
    sing(){
        console.log("isu boy badshah!");
    } 
    earns(){
        console.log(`${this.firstName} earns $${this.income} in a year.`);
    }
}

const badshah = new Rapper("Badshah", "Pagal", "gay@homo.com", 40, "delhi", "2M");

console.log(badshah);
badshah.sing();
badshah.earns();

// getters and setters
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // static method
    static classInfo(){
        return "this is a class function";
    }

    static desc = "static Property"; //static property

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    /*setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }*/

    set fullName(fullName){
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Ram","Prasad");
//console.log(person1.fullName());
// we want to use this function as a property

console.log(person1.fullName);

//person1.setName("Rana", "Sangha");

//console.log(person1.fullName);

// we are changing the full name by changing first and last name individually
// we want to directly change the fullname.
// something like: person1.fullname = "Dhari Singh"

person1.fullName = "Kanye West";
console.log(person1);

// static methods and properties
// these methods are related to class and can only be applied on them

console.log(Person.classInfo());
console.log(Person.desc);