let computerChoice=0;
let userChoice=0;

document.querySelector('.js-start-game')
    .addEventListener('click',()=>{
        computerChoice = Math.round(Math.random() * 10);
        // console.log(computerChoice);        
    });


document.querySelector('.js-submit')
    .addEventListener('click',()=>{
        let inputElem = document.querySelector('.js-input');
        userChoice = inputElem.value;
        result(computerChoice,userChoice);
});

function result(computerChoice,userChoice){
    if(computerChoice == userChoice) console.log('You win');
    else console.log("Try again");
    console.log('Your Choice',userChoice);
    console.log('Computer choice',computerChoice);
}

