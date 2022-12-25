/*id=> compChoice, yourChoice, result, rock,scissors,paper*/

let computerChoice = document.getElementById('compChoice')
let yourChoice = document.getElementById('yourChoice')
let Result = document.getElementById('result')
let possibleChoices = document.querySelectorAll('button')
let Rock = document.getElementById('rock')
let Scissors = document.getElementById('scissors')
let Paper = document.getElementById('paper')


let eventItems;
let computerChoiceItems;
let showResult;
possibleChoices.forEach((elements)=>{
    elements.addEventListener('click', function(e){
        eventItems=e.target.id
        yourChoice.innerText=eventItems

        generateComputerChoice()
        getResult()
    })

    function generateComputerChoice(){
        let randomNumber=Math.floor(Math.random()*3 )
        // possibleChoices.length=>3
        // console.log(randomNumber);

        if(randomNumber==1){
            computerChoiceItems='rock'
        }
        if(randomNumber==2){
            computerChoiceItems='scissors'
        }
        if(randomNumber==3){
            computerChoiceItems='paper'
        }
        computerChoice.innerText=computerChoiceItems;
    }
})

function getResult(){
    if(computerChoice===yourChoice){
      showResult='its a draw'
    }
    if(computerChoice=='scissors' && yourChoice=='paper'){
        showResult='you lost'
    }
    if(computerChoice=='paper' && yourChoice=='scissors'){
        showResult='you win'
    }
    if(computerChoice=='scissors' && yourChoice=='rock'){
        showResult='you win'
    }
    if(computerChoice=='rock' && yourChoice=='scissors'){
        showResult='you win'
    }
    if(computerChoice=='rock' && yourChoice=='paper'){
        showResult='you lost'
    }
    if(computerChoice=='paper' && yourChoice=='rock'){
        showResult='you win'
    }
    Result.innerText=showResult;
}
