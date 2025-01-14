document.querySelector('.js-submit')
.addEventListener('click',()=>{
    let inputElem = document.querySelector('.js-input');
    let userChoice = inputElem.value;
    let computerChoice = Number(Math.random());
    finalCompChoice(computerChoice);
    result(computerChoice,userChoice);
    });


function finalCompChoice (computerChoice){
    if(computerChoice < 0.5){ 
        if(computerChoice>0 && computerChoice<=0.1) computerChoice = 1;
        else if(computerChoice>0.1 && computerChoice<=0.2) computerChoice = 2;
        else if(computerChoice>0.2 && computerChoice<=0.3) computerChoice = 3;
        else if(computerChoice>0.3 && computerChoice<=0.4) computerChoice = 4;
    }
    else if(computerChoice > 0.5){
        if(computerChoice>0.5 && computerChoice<=0.6)computerChoice = 6;
        else if(computerChoice>0.7 && computerChoice<=0.8)computerChoice = 8;
        else if(computerChoice>0.6 && computerChoice<=0.7)computerChoice = 7;
        else if(computerChoice>0.8 && computerChoice<=0.9)computerChoice = 9;
        else if(computerChoice>0.9 && computerChoice<=1)computerChoice = 10;
    }
    else{
        computerChoice = 5;
    }
    console.log(computerChoice);
}

function result(computerChoice,userChoice){
    if(userChoice > computerChoice){
        console.log('Your choice is high');
    }else if(userChoice < computerChoice){
        console.log('Your choice is low');
    }else{
        console.log('You won');
    }
}

