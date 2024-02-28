let user=0;
let comp=0;

let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userSCore=document.querySelector("#user");
let compSCore=document.querySelector("#comp");


const generateCompChoice=() =>{
    let options=["rock","paper","scissors"];
   const randomChoice=Math.floor(Math.random()*3);
   return options[randomChoice];
}

const showWinner=(userWin,userchoice,compuChoice)=>{
    if(userWin)
    {
        console.log("You Win");
    user++;
        userSCore.textContent=user;
        msg.textContent = 'You Win';
        msg.style.backgroundcolor="green";
      
    }
   else{
    console.log("You Loose");
    msg.textContent = "You Loose";
 machine++;
 compSCore.textContent=machine;
 
   msg.style.backgroundcolor="red";
   }

};

const drawGame=()=>{
    console.log("game was draw");
    msg.textContent = "Game was Draw. Play again";
    
};

const playGame=(userchoice) => {
console.log("userchoice =",userchoice);
//generate computer choice
const compuChoice=generateCompChoice();
console.log("compchoice =",compuChoice);

if(userchoice === compuChoice)
{
    //draw
    drawGame();
}
    else 
    {
let userWin=true;
if(userchoice === "rock")
{
    userWin=compuChoice==="paper" ? false:true;
}
else if(userchoice === "paper")
{
userWin= compuChoice === "scissors" ? false:true;
}
else{
    userWin=compuChoice === "rock" ? false: true;
}
showWinner(userWin,userchoice,compuChoice); 
};
};
    


choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
console.log("choice was clicked",userchoice);
playGame(userchoice);
});
});