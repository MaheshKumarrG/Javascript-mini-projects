let computerChoice=0;
let userChoice=0;
let tryCount = 1;
let userName ='';

let displayELem = document.querySelector('.js-display-result');
let inputElem = document.querySelector('.js-input');
let nameElem  = document.querySelector('.js-get-name');



document.querySelector('.js-start-game')
    .addEventListener('click',()=>{
        userName = nameElem.value;
        computerChoice = Math.round(Math.random() * 10);
        console.log(userName);        
    });

document.querySelector('.js-submit')
    .addEventListener('click',()=>{
        userChoice = inputElem.value;
        result(computerChoice,userChoice);
    });

inputElem.addEventListener('keydown', function(event) {
    // let keyPressed = event.key;
    // console.log(keyPressed);
    if (event.key === 'Enter') { 
        document.querySelector('.js-submit').click(); 
    }
});    

function result(computerChoice,userChoice){
    if(computerChoice == userChoice) {
        displayELem.innerHTML = `Congragulations ${userName}, You Win! By guessing the number in ${tryCount} tries`;
    } else {
        if(userChoice < computerChoice) displayELem.innerHTML = 'Too low';
        else  displayELem.innerHTML = 'Too high';
        tryCount++;
    }
}

document.querySelector('.js-reset')
    .addEventListener('click',()=>{
        displayELem.innerHTML = '';
        inputElem.value = '';
        tryCount = 1;
        computerChoice = Math.round(Math.random() * 10);
        console.log(computerChoice);
    });



