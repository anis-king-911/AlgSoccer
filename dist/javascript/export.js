const firebaseVersion = '9.14.0';

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getDatabase, ref, child, set, onValue
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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

export { database, ref, child, set, onValue }
