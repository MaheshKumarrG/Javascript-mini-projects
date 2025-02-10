let intervalID = '';

const colorDisplay = document.querySelector('.js-color-div');

let displayColor = function() {
    let hexa = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hexa[Math.floor(Math.random() * 16)];
    }
    document.querySelector('.js-hexa-code').innerHTML = color;
    colorDisplay.style.backgroundColor = color;
}

let btnElem = document.querySelector('.js-btn');

btnElem.addEventListener('click',()=>{
    if(btnElem.innerHTML === 'Start'){
        btnElem.innerHTML = 'Stop';
        btnElem.classList.remove('start');
        btnElem.classList.add('stop');
        intervalID = setInterval(displayColor, 2000);
    }
    else{
        btnElem.innerHTML = 'Start';
        btnElem.classList.remove('stop');
        btnElem.classList.add('start');
        clearInterval(intervalID);
    }
});


