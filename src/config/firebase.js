// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDFJiCWvhih7AF3fI2A4mZkXCCqSMSkGH8",
  authDomain: "learningproject-79846.firebaseapp.com",
  projectId: "learningproject-79846",
  storageBucket: "learningproject-79846.appspot.com",
  messagingSenderId: "714737108899",
  appId: "1:714737108899:web:9d5ae045bce170de89bc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider =new GoogleAuthProvider()
export const db=getFirestore(app)