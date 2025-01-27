let imageArray = [
    'images/sung.webp',
    'images/sasuke.webp',
    // 'images/naruto.webp',
    // 'images/luffy.webp',
    // 'images/girl2.webp',
    // 'images/girl.webp',
    // 'images/aeroplane.webp'
];

let i = 0;

let imageDisplay = document.querySelector('.js-image-holder');

setInterval(() => {
    imageDisplay.innerHTML = `<img src="${imageArray[i]}" class="css-imgDisplay">`;
    i++;

    if (i >= imageArray.length) {
        i=0;
    }
}, 3000);

