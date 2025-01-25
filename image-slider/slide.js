let imageArray = [
    'images/sung.webp',
    'images/sasuke.webp',
    'images/naruto.webp',
    'images/luffy.webp',
    'images/girl2.webp',
    'images/girl.webp',
    'images/aeroplane.webp'
];

let imageElem = '';
for(let i = 0; i < imageArray.length;i++){
    imageElem += `<img src="" class=id-${i}>`;   
}
document.querySelector('.js-image-holder')
    .innerHTML = imageElem;
for(let i = 0; i < imageArray.length;i++){
    document.querySelector(`.id-${i}`)
        .src = `${imageArray[i]}`;
}