
let temperature = Number(prompt("Enter temperature"));

if(temperature < 15){
    alert("Cold");
}
else if(temperature >= 15 && temperature <= 25){
    alert("Ideal");
}
else if(temperature < 35){
    alert("Slightly Warm, turn on the fans");
}
else{
    alert("AC khol jaldi!!!");
}

// Switch statement
let day = 0;

switch(day){
    case 1:
        console.log("Monday"); break;
    case 2:
        console.log("Tuesday"); break;
    case 3:
        console.log("Wednesday"); break;
    case 4:
        console.log("Thursday"); break;
    case 5:
        console.log("Friday"); break;
    case 6:
        console.log("Saturday"); break;
    case 7:
        console.log("Sunday"); break;
    default:
        console.log("Invalid Day");
}