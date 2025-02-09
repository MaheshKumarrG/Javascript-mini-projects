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

document.querySelector('.start').addEventListener('click',()=>{
    intervalID = setInterval(displayColor, 1000);
});

document.querySelector('.stop').addEventListener('click',()=>{
    clearInterval(intervalID);
})

