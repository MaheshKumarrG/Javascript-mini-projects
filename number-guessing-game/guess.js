// document.querySelector('.js-submit')
// .addEventListener('click',()=>{
//     let inputElem = document.querySelector('.js-input');
//     let userChoice = inputElem.value;
//     let computerChoice = Number(Math.random());
//     finalCompChoice(computerChoice);
//     result(computerChoice,userChoice);
//     });



// let computerChoice;
document.querySelector('.js-start-game')
    .addEventListener('click',()=>{
        let computerChoice = Math.round(Math.random() * 10);
        console.log(computerChoice);        
    });

function result(computerChoice,userChoice){
    if(userChoice > computerChoice){
        console.log('Your choice is high');
    }else if(userChoice < computerChoice){
        console.log('Your choice is low');
    }else{
        console.log('You won');
    }
}

