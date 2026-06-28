// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSMOMdOk2Jhy1QnLXonPj1SIF6PklJXt4",
  authDomain: "tiendablk-30590.firebaseapp.com",
  projectId: "tiendablk-30590",
  storageBucket: "tiendablk-30590.firebasestorage.app",
  messagingSenderId: "32577672772",
  appId: "1:32577672772:web:ab256016a3fbbf496d4e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth  = getAuth(app);

export {db, auth};


