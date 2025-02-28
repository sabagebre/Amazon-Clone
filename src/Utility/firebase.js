// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ObYgEvqPZV7culEER0R85mA6-uPdqLs",
  authDomain: "clone-d1dc6.firebaseapp.com",
  projectId: "clone-d1dc6",
  storageBucket: "clone-d1dc6.firebasestorage.app",
  messagingSenderId: "75237985463",
  appId: "1:75237985463:web:965af6b667174bcb199132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db =getFirestore(app)