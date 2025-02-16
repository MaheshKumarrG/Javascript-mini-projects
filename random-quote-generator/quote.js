fetch('https://thequoteshub.com/api/random-quote').then((responseData)=>{
    return responseData.json();
}).then((data)=>{
    console.log(data);    
}).catch(()=>{
        console.log('Error occured during fetch');
});
