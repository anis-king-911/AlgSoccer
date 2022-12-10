import LoadData from './javascript/ReadData.js';

const tBody = document.querySelector('tbody');
const Boxs = document.querySelectorAll('.box');
const Score = document.querySelector('.Goals');

window.onload = ()=> LoadData(tBody, Boxs, Score);

//Boxs.forEach((box) => {
//  box.addEventListener('click', (event) => {
//    console.log(event.target);
//  })
//})
