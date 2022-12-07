import LoadData from './javascript/ReadData.js';

const tBody = document.querySelector('tbody');
const Boxs = document.querySelectorAll('.box');

window.onload = ()=> LoadData(tBody, Boxs);

//Boxs.forEach((box) => {
//  box.addEventListener('click', (event) => {
//    console.log(event.target);
//  })
//})