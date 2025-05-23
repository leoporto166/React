import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCeuMN9O-lCdCJrOhJw-1M5g7goW1fF69U",
  authDomain: "curso-1bf3d.firebaseapp.com",
  projectId: "curso-1bf3d", // <-- corrigido aqui
  storageBucket: "curso-1bf3d.firebasestorage.app",
  messagingSenderId: "7117202146",
  appId: "1:7117202146:web:b66002022ec72eeec1b4bb",
  measurementId: "G-81XYZZ8802"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp)

export { db, auth };