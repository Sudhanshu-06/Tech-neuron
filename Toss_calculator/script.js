let btns= document.querySelectorAll("button");
let div= document.querySelector("div");


for(let t of btns){
    t.addEventListener("click",doToss)
}
let userScore=0
let computerScore=0
function doToss(eventDetails){
    // console.log(eventDetails.target.innerText);
    let userChoice=eventDetails.target.innerText

    let choices=['Head','Tail']
    let randomIndex=Math.floor(Math.random() * choices.length)

    let tossValue=choices[randomIndex]
    if(userChoice===tossValue){
        userScore++
    }
    else{
        computerScore++
    }
    div.innerHTML=`
        <p>Your Score: ${userScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `
    // console.log(userScore,computerScore);

}