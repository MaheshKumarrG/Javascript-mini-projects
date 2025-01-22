let choiceCount;
let htmlDisplayInput ='';


let displayInput = document.querySelector('.js-gen-input');
let inputCountElem = document.querySelector('.js-choice-count');


document.querySelector('.js-next-btn')
    .addEventListener('click',()=>{
        choiceCount = inputCountElem.value;        
        for(let i=1; i<=choiceCount;i++){
            htmlDisplayInput += `<p><input type="text"></p>`
        }
        displayInput.innerHTML = htmlDisplayInput;
    });

document.querySelector('.js-reset')
    .addEventListener('click',()=>{
        inputCountElem.value = '';
        displayInput.innerHTML = '';
        htmlDisplayInput = '';
    })

