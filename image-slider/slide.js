let imageArray = [
    'images/sung.webp',
    'images/sasuke.webp',
    'images/naruto.webp',
    'images/luffy.webp',
    'images/girl2.webp',
    'images/girl.webp',
    // 'images/aeroplane.webp',
];

// for(let i = 0; i < 7;i++){
//     document.querySelector('.js-image-holder')
//         .innerHTML = `<img src="${imageArray[i]}" alt="">`;    
// }

for(let i = 0; i < 7;i++){
    document.querySelector('.js-image-holder')
        .innerHTML = `<img src="${imageArray[i]}" alt="">`;    
}