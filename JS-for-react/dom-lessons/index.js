// DOM, document object model

// innerText
const heading = document.querySelector("h2");

console.log(heading.innerText);

//style
heading.style.color = "purple";
heading.style.backgroundColor = "gold";

// get and set attributes
const link = document.querySelector("input");
console.log(link.getAttribute("type"));

const yt = document.querySelector("a");
console.log(yt);

yt.setAttribute("href", "https://youtube.com");


// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll 




// js for vowel counter
const text = document.querySelector(".text");
const count = document.querySelector(".ct");
const vowelCounter = () => {
    let ct = 0;
    const string = text.value;
    for(let char of string){
      let x = char.toLowerCase();
      if(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        ct++;
      }
    }
    console.log(ct);
    count.innerText = ct;
}

const submit = document.querySelector(".submit");

submit.addEventListener('click', vowelCounter);




