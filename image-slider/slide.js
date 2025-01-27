// let imageArray = [
//     'images/sung.webp',
//     'images/sasuke.webp',
//     'images/naruto.webp',
//     'images/luffy.webp',
//     'images/girl2.webp',
//     'images/girl.webp',
//     'images/aeroplane.webp'
// ];


let imageArray = [
    'images/number-image/one.webp',
    'images/number-image/two.webp',
    'images/number-image/three.webp',
    'images/number-image/four.webp',
    'images/number-image/five.jpg',
    'images/number-image/six.webp',
    'images/number-image/seven.webp',
    'images/number-image/eight.webp',
    'images/number-image/nine.jpg',
    'images/number-image/ten.webp',
]


let i = 0;

let imageDisplay = document.querySelector('.js-image-holder');
// let preBtn = document.querySelector('.js-pre');

setInterval(() => {
    imageDisplay.innerHTML = `<img src="${imageArray[i]}" class="css-imgDisplay">`;
    i++;

    if (i >= imageArray.length) {
        i=0;
    }
}, 5000);


document.querySelector('.js-pre').addEventListener('click',()=>{
    i--;
    console.log(i);
});

document.querySelector('.js-nxt').addEventListener('click',()=>{
    console.log('next');
});
