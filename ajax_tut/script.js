document.getElementById("btn").addEventListener("click", () => {
    console.log("You've clicked the button");
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'demo.txt', true);

    // what to do on progress (optional)
    xhr.onprogress = function(){
        console.log("On progress");
    }

    // when response is ready
    xhr.onload = function(){
        console.log(this.response);
        document.getElementById("text").innerHTML = this.response;
    }

    // send the request
    xhr.send();
})