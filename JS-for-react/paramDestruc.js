const person = {
    firstName : "Harshit",
    gender : "Transgender Woman",
}

function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);