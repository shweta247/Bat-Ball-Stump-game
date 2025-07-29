let userScore=0;
let computerScore=0;

function playgame(userChoice){
    const randomNumber=Math.random()*3;
    
    let computerChoice="";
    
    if(randomNumber<1){
        computerChoice='Bat';
    }else if(randomNumber<2){
        computerChoice='Ball';
    }else{
        computerChoice='Stump';
    }

    let resultMsg="";

    if(userChoice===computerChoice){
        resultMsg="It's a tie";
    }else if(
        (userChoice==='Bat' && computerChoice==='Ball')||
        (userChoice==='Ball' && computerChoice==='Stump')||
        (userChoice==='Stump' && computerChoice==='Bat')
    ) {
        resultMsg="🎉 You win!";
        userScore++;
    }else{
        resultMsg="😢 Computer wins";
        computerScore++;
    }

    document.getElementById("result").innerHTML=`<p>You Chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong>.</p>
    <h2>${resultMsg}</h2>`;

    document.getElementById("user-score").textContent=userScore;
    document.getElementById("computer-score").textContent=computerScore;


    
}