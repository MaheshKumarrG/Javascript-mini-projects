let computerChoice=0;
let userChoice=0;
let tryCount = 1;

let displayELem = document.querySelector('.js-display-result');
let tryElem = document.querySelector('.js-display-tries');
let inputElem = document.querySelector('.js-input');


document.querySelector('.js-start-game')
    .addEventListener('click',()=>{
        computerChoice = Math.round(Math.random() * 10);
        console.log(computerChoice);        
    });

document.querySelector('.js-submit')
    .addEventListener('click',()=>{
        userChoice = inputElem.value;
        result(computerChoice,userChoice);
});

function result(computerChoice,userChoice){
    if(computerChoice == userChoice) {
        displayELem.innerHTML = 'You win';
        tryElem.innerHTML =  `Tries:${tryCount}`;
    } else {
        if(userChoice < computerChoice) displayELem.innerHTML = 'Too low';
        else  displayELem.innerHTML = 'Too high';
        tryCount++;
    }
}


document.querySelector('.js-reset')
    .addEventListener('click',()=>{
        displayELem.innerHTML = '';
        tryElem.innerHTML =  ``;
        inputElem.value = '';
        tryCount = 1;
        computerChoice = Math.round(Math.random() * 10);
        console.log(computerChoice);
    });