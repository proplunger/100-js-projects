const numbers = [9,4,1000,123,99];
console.log(numbers);
numbers.sort();

console.log(numbers);
// js sorts the array elements as strings not numbers (ASCII codes)

const userNames = ["Kutta", "Billi", "Bhais", "Saanp", "Aadmi"];
userNames.sort();
console.log(userNames);

numbers.sort((a,b) => {
    return a-b;
})

console.log(numbers);

// price lowToHigh and highToLow

const product = [
    {productId: 1, name: "p1", price: 12499},
    {productId: 2, name: "p2", price: 22499},
    {productId: 3, name: "p3", price: 112499},
    {productId: 4, name: "p4", price: 18500},
    {productId: 5, name: "p5", price: 99499},
]

// low to high

const sortedProds =[...product].sort((a,b) => {
    return a.price-b.price;
})

console.log(product);
console.log(sortedProds);

// high to low

const highToLow = [...product].sort((a,b) => {
    return (b.price - a.price);
})

console.log("high to low:", highToLow);

// find method

const janwar = ["Cat", "Dog", "Giraffe", "Elephant", "Frog", "Hiena", "Iguana",
                "Jackal", "kangaroo", "Lion", "Monkey", "Orangutan", "Pirana",
                "Rabbit", "Snake", "Tiger", "Zebra"];

console.log(janwar.find((s) => {
    return (s.length === 4);
}));

// find is very handy when dealing with unique key scenarios like:

const students = [
    {studentId: 1, Name: "Rustam", gpa: 3.95},
    {studentId: 2, Name: "Ricardo", gpa: 2.98},
    {studentId: 4, Name: "Rubel", gpa: 1.97},
    {studentId: 5, Name: "kishan", gpa: 4.0},
    {studentId: 6, Name: "kaalu", gpa: 2.9},
    {studentId: 7, Name: "Kr$na", gpa: 3.5},
]

const rapper = students.find((student) => {
    return (student.studentId == 7);
})

console.log(rapper);

// every Method

const digit = [2,4,6,8,12,22];

const IsEven = digit.every((num) => {
    return num % 2 === 0;
})

console.log(IsEven);

console.log(students.every((student) => {
    return student.gpa <= 4.0;
}));

// some method

console.log("Kr$na is in the Class", students.some((student) => student.Name === "Kr$na"));

// fill method, splice method