// const str =  new String('MaheshJs');
// console.log(str);

// console.log();


// Async practice
/*

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let msgElem = document.querySelector('.displayMsg');
let intervalId = '';

const Interval = function(){
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i < 6;i++){
        color += hexa[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
};

startBtn.addEventListener('click',()=>{
    intervalId = setInterval(Interval, 1000);
    msgElem.innerHTML = 'Interval is started';
});

stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
    msgElem.innerHTML = 'Interval is stopped';    
})
*/

// API Resquest - XMHL request
// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://api.github.com/users/MaheshKumarrG');
// // console.log(xhr.readyState);

// let imgElem = document.querySelector('.js-imgDiv');
// let nameElem = document.querySelector('.js-name');
// let followersElem = document.querySelector('.js-followers');


// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);

//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data);

//         let userName = data.login;
//         let profilePic = data.avatar_url;
//         let followers = data.followers;
        
//         imgElem.innerHTML = `<img src=${profilePic}>`;
//         nameElem.innerHTML = userName;
//         followersElem.innerHTML = followers;


//         // console.log(data.followers);    
//     }
// }

// xhr.send();

/*Promises*/
// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Displaying after 2s (by promise)");
//         resolve();
//     }, 2000);
// });
// myPromise.then(()=>{    
//     console.log('Promise consumed! (after 2s)');        
// });

// const myPromiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(() => {    
//         //Getting data, and passing to then    
//         resolve({
//             username:'mahesh',
//             password:'darkSoul'
//         });
//     }, 2000);
// });
// myPromiseTwo.then((userData)=>{
//     console.log(userData.password);
// }).catch(()=>{
//     console.log('Error:Data not found');
// });

// const myPromiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({
//                 username:'Pubg',
//                 password:'darkSoul'
//             });
//         }else{
//             reject('Error:user not found');
//         }
//     }, 3000);
// });
// // myPromiseThree.then((userData)=>{
// //     console.log(userData);    
// // }).catch((error)=>{
// //     console.log(error);
// // });
// async function consumePromiseThree(){
//     try{
//         const response = await myPromiseThree;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }finally{
//         console.log('In async await function');
//     }
// }
// consumePromiseThree();

// fetch('https://api.github.com/users/MaheshKumarrG').then(
//     (responseData)=>{
//         let userResponseData = responseData.json();
//         console.log(userResponseData);
//     }
// ).catch(()=>{
//     console.log('Error occured during fetch');
// });

/**/





