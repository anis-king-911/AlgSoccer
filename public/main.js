import LoadData from '/public/javascript/ReadData.js';

const tBody = document.querySelector('tbody');

window.onload = ()=> LoadData(tBody);
