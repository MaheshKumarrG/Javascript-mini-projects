let imageArray = [
    'images/sung.webp',
    'images/sasuke.webp',
    'images/naruto.webp',
    'images/luffy.webp',
    'images/girl2.webp',
    'images/girl.webp',
    'images/aeroplane.webp'
];

let imgHtml = '';

let imageDiv = document.querySelector('.js-image-holder');

for(let i=0;i<imageArray.length;i++){
    setInterval((i) => {
        console.log(imageArray[i]);       
    }, 3000);
}
console.log(imgHtml);
