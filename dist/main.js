import LoadData from './javascript/ReadData.js';

const tBody = document.querySelector('tbody');
const Boxs = document.querySelectorAll('.box');
const Score = document.querySelector('.Goals');

window.onload = ()=> LoadData(tBody, Boxs, Score);
