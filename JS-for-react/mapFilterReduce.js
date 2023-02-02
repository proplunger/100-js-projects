//for each
//Map
//Filter
//Reduce

const numbers = [1,2,3,5,6];

function firstEl(number,index){
    console.log(`index is ${index} and number is ${number}`);
}

numbers.forEach(function(number, index){
     console.log(`index is ${index} and number is ${number}`);
});

numbers.forEach((number) => {
    console.log(2*number);
})

const users = [
    {firstName: "Dan", age: 21},
    {firstName: "Pete", age: 20},
    {firstName: "Ashok", age: 23},
    {firstName: "Kanye", age: 35}
]

users.forEach((user) => {
    console.log(user.firstName, user.age);
})

// map method
const num = [3, 4, 6, 1, 8];

const newArray = num.map((num,ind) =>{
    return `index is: ${ind} and square is: ${(num*num)}`;
})

console.log(newArray);

const Names = users.map((user) =>{
    return(user.firstName);
})

console.log(Names);


// Filter method

const digits = [1,2,3,4,5,6,7,8,9,11];

const even = digits.filter((digit) =>{
    return digit % 2 == 0; 
})

console.log(even);

// Reduce Method

const count = [1,2,3,4,100];
// aim: sum of all the numbers in the array using reduce method
const Sum = count.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})

console.log(Sum);

const Cart = [
    {productId: 1, productName: "Laptop", productPrice: 200000 },
    {productId: 2, productName: "Mobile", productPrice: 100000 },
    {productId: 3, productName: "TV", productPrice: 300000 },
]

const Total = Cart.reduce((TotalPrice, CurrentProduct)=>{
    return TotalPrice + CurrentProduct.productPrice;
},0)

console.log(Total);
