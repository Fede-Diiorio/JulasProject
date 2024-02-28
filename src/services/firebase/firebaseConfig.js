// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtJwb6m7yQ7J2XE1gWqDyx740e5RrslMk",
    authDomain: "julasproject-f7695.firebaseapp.com",
    projectId: "julasproject-f7695",
    storageBucket: "julasproject-f7695.appspot.com",
    messagingSenderId: "836804640628",
    appId: "1:836804640628:web:830529daa8d2e4cf707621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);