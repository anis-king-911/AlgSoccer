const firebaseVersion = '9.17.1';

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getDatabase, ref, child, set, update, get, onValue
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_k-BdGYM56FUSvYqJ36BbeBd5aLMLMyc",
  authDomain: "algsoccer-18.firebaseapp.com",
  databaseURL: "https://algsoccer-18-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "algsoccer-18",
  storageBucket: "algsoccer-18.appspot.com",
  messagingSenderId: "690391797120",
  appId: "1:690391797120:web:dda9d8595eb22c35418565"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, child, set, update, get, onValue }

const CoachList = [
  {
    'id': 49,
    'Name': 'Vahid Halilhodzic',
    'Year': '22/06/2011--07/072014',
    'matches': '31'
  },
  {
    'id': 50,
    'Name': 'Christian Gourcuff',
    'Year': '01/08/2014--03/04/2016',
    'matches': '21'
  },
  {
    'id': 51,
    'Name': 'Nabil Naghiz',
    'Year': '04/042016--30/06/2016',
    'matches': '01'
  },
  {
    'id': 52,
    'Name': 'Milovan Rajevac',
    'Year': '01/07/2016--11/10/2016',
    'matches': '02'
  },
  {
    'id': 53,
    'Name': 'George Leekens',
    'Year': '27/10/2016-24/01/2017',
    'matches': '12'
  },
  {
    'id': 54,
    'Name': 'Lucas Alcaraz',
    'Year': '13/04/2017--18/10/2017',
    'matches': '05'
  },
  {
    'id': 55,
    'Name': 'Rabah Madjer',
    'Year': '19/10/2017--24/01/2018',
    'matches': ''
  },
  {
    'id': 56,
    'Name': 'Jamal Belmadi',
    'Year': '02/08/2018--31/12/2022',
    'matches': ''
  }
]