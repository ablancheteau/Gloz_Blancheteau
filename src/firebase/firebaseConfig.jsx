// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDqtjZD4wSqIjT475Gr4TEvDVEAvPkY9o",
  authDomain: "gloz-839ca.firebaseapp.com",
  projectId: "gloz-839ca",
  storageBucket: "gloz-839ca.appspot.com",
  messagingSenderId: "744928909028",
  appId: "1:744928909028:web:ff79240fc2719c8d877ef1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 