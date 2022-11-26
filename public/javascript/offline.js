import {
  DataForm
} from './DataForm.js';

const getJSON = (url, callback)=> {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = ()=> {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const url = './data.json';
const tBody = document.querySelector('tbody');


getJSON(url, (error, data)=> {
  if (error !== null) {
    console.log(error);
  } else {
    for(const[key, value] of Object.entries(data)) {
      tBody.innerHTML += DataForm(value);
    }
  }
});

