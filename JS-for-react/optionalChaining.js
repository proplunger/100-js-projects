// optional chaining
// used in nested Object Literals

const user = {
    firstName: "Harshit",
    Address: {city: "Delhi",
              houseNo: 123,
              Landmark: "ParatheWali gali"},
   // employed: {Institution: "google",}
}

console.log(user?.employed?.Institution);