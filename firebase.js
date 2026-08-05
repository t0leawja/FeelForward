import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyASEfihB3Z5XKonjciS_CtnMBlGo-7neQg",
  authDomain: "feelforward-7b554.firebaseapp.com",
  projectId: "feelforward-7b554",
  storageBucket: "feelforward-7b554.firebasestorage.app",
  messagingSenderId: "78650831419",
  appId: "1:78650831419:web:7436af9d86e4d40269df1e",
  measurementId: "G-9FS6EX29HL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };