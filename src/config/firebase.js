// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDManCsMULyrOqRH3Ji2LUCdAY0ooQ8TA",
  authDomain: "vite-contact-36c48.firebaseapp.com",
  projectId: "vite-contact-36c48",
  storageBucket: "vite-contact-36c48.appspot.com",
  messagingSenderId: "247346190149",
  appId: "1:247346190149:web:229975a4a6b947ac5f902c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);