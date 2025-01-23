let choiceCount;
let htmlDisplayInput ='';
let compChoice =0;


let displayInput = document.querySelector('.js-gen-input');
let inputCountElem = document.querySelector('.js-choice-count');
let displayResult = document.querySelector('.js-display-choice');

document.querySelector('.js-next-btn')
    .addEventListener('click',()=>{
        choiceCount = inputCountElem.value;        
        for(let i=1; i<=choiceCount;i++){
            htmlDisplayInput += `<p><input type="text" class=id-${i}></p>`
        }
        displayInput.innerHTML = htmlDisplayInput;

        compChoice = Math.floor(Math.random() * (choiceCount)) + 1;
        console.log(compChoice);
    });


document.querySelector('.js-gen-choice')
    .addEventListener('click',()=>{
        let compChoiceInput = document.querySelector(`.id-${compChoice}`); 
        console.log(compChoiceInput.value);
        displayResult.innerHTML = `<p>You can go with <b>${compChoiceInput.value}</b> </p>`
    })


document.querySelector('.js-reset')
    .addEventListener('click',()=>{
        inputCountElem.value = '';
        displayInput.innerHTML = '';
        htmlDisplayInput = '';
        displayResult.innerHTML = '';
    })

