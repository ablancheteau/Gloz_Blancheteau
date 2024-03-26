import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDqtjZD4wSqIjT475Gr4TEvDVEAvPkY9o",
  authDomain: "gloz-839ca.firebaseapp.com",
  projectId: "gloz-839ca",
  storageBucket: "gloz-839ca.appspot.com",
  messagingSenderId: "744928909028",
  appId: "1:744928909028:web:ff79240fc2719c8d877ef1"

  //  apiKey: process.env.REACT_APP_apiKey,
//  authDomain: process.env.REACT_APP_authDomain,
//  projectId: process.env.REACT_APP_projectId,
//  storageBucket: process.env.REACT_APP_storageBucket,
//  messagingSenderId: process.env.REACT_APP_messagingSenderId,
//  appId: process.env.REACT_APP_appId
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
