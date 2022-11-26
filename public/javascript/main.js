import {
  LoadData, UpdateData
} from './ReadData.js';

const tBody = document.querySelector('tbody')

window.onload = ()=> {
  LoadData(tBody)
}
/*
const update_btn = document.querySelector('.update_btn')
if(update_btn) {
update_btn.addEventListener('click', ()=> {
  UpdateData();
})
}
*/