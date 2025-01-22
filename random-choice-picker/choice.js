let choiceCount;
let htmlDisplayInput ='';
let compChoice;

let displayInput = document.querySelector('.js-gen-input');
let inputCountElem = document.querySelector('.js-choice-count');


document.querySelector('.js-next-btn')
    .addEventListener('click',()=>{
        choiceCount = inputCountElem.value;        
        for(let i=1; i<=choiceCount;i++){
            htmlDisplayInput += `<p><input type="text" class=id-${i}></p>`
        }
        displayInput.innerHTML = htmlDisplayInput;

        compChoice = Math.floor(Math.random() * (choiceCount)) + 1;
    });


let compChoiceInput = document.querySelector(`.id-${compChoice}`); 

document.querySelector('.js-gen-choice')
    .addEventListener('click',()=>{
        console.log(compChoiceInput.value);
    })


document.querySelector('.js-reset')
    .addEventListener('click',()=>{
        inputCountElem.value = '';
        displayInput.innerHTML = '';
        htmlDisplayInput = '';
    })

