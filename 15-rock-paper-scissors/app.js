const Rock = document.querySelector(".Rock");
const Paper = document.querySelector(".Paper");
const Scissors = document.querySelector(".Scissors");


// Play function
const handlePlay  = (PlayerMove) => {
    const arr = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    const move = arr[index];
    console.log("PlayerMove: ", PlayerMove);
    console.log("Move: ", move);
    let ans = "";

    if(PlayerMove === move)ans = "Draw";
    else if(PlayerMove === "Rock"){
        if(move === "Paper")ans = "Loss";
        else ans = "Win";
    }else if(PlayerMove === "Paper"){
        if(move === "Scissors")ans = "Loss";
        else ans = "Win";
    }else{
        if(move === "Rock")ans = "Loss";
        else ans = "Win";
    }
    console.log(ans);
}

Rock.addEventListener("click", handlePlay("Rock"));
Paper.addEventListener("click", handlePlay("Paper"));
Scissors.addEventListener("click", handlePlay("Scissors"));


