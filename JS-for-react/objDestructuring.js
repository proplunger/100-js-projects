// Destructuring in objects

console.log("Destructuring in objects:");

const Obj = {
    itemNo : 1,
    itemName : "MacBook",
    itemPrice : 200000,
    Country : "USA",
    Year : 2023
}

// variable names are by default the names of the properties of the object we want to destructure
let {Country, itemNo, itemName, itemPrice, Year} = Obj;

console.log(Country);

// if want to change the name of properties

let {itemPrice : Rupees} = Obj;

console.log(Rupees);

const {itemNo: li, ...restProp} = Obj;

console.log(restProp);

// Objects in arrays
// LOT OF REAL WORLD APPLICATIONS
const users = [
    {UserId: 1, firstName: "Kishan", gender: "Male"},
    {UserId: 2, firstName: "Ricardo", gender: "Non-binary"},
    {UserId: 3, firstName: "Rue", gender: "Female"},
]

console.log(users[1].gender);

// nested destructuring
const [user1] = users;
console.log(user1); 

const [{UserId}, {firstName} , {gender}] = users;

console.log(UserId, firstName, gender);