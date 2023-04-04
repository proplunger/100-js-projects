const Rock = document.querySelector(".Rock");
const Paper = document.querySelector(".Paper");
const Scissors = document.querySelector(".Scissors");

const wins = document.querySelector(".Wins");
const draws = document.querySelector(".Draws");
const loss = document.querySelector(".Loss");

let w = 0, l = 0, d = 0;

// Play function
const handlePlay  = (e) => {
    const PlayerMove = e.currentTarget.className;
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
    if(ans == "Win"){
        w += 1;
        wins.innerText = `Wins: ${w}`;
    }else if(ans == "Loss"){
        l += 1;
        loss.innerText = `Loss: ${l}`;
    }else{
        d += 1;
        draws.innerText = `Draws: ${d}`;
    }
}


Rock.addEventListener("click", handlePlay);
Paper.addEventListener("click", handlePlay);
Scissors.addEventListener("click", handlePlay);


