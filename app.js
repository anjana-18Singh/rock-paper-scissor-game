let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const gencompuChoice=() =>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    // rock paper scissor//
}
const drawGame = ()=>{
    console.log("game was draw between them");
    msg.innerText="game was Draw.play again";
    msg.style.backgroundColor= "yellow";
    msg.style.color="black";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        // console.log("you win!");
        msg.innerText=`you win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        //console.log("you lose");
        msg.innerText=`you lost. your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};



const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=gencompuChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw condition
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor //paper
            userWin=compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors//
            userWin=compChoice==="scissor"?false:true;

        }else{
            //rock ,paper
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        

    }




}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // const choiceId=choice.getAttribute("id");
        // console.log("choice was clicked",choiceId )
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})     