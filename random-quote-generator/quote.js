let quoteElem = document.querySelector('.js-quote');
let authorElem = document.querySelector('.js-author');




fetch('https://thequoteshub.com/api/random-quote').then((responseData)=>{
    return responseData.json();
}).then((data)=>{
    // console.log(data);
    
    quoteElem.innerHTML = data.text;    
    authorElem.innerHTML = data.author;    
}).catch(()=>{
        quoteElem.innerHTML = 'Error occured during fetch';
});
