// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // apiKey: "AIzaSyBkdQ_tB4PQGM4xJtBKulpGu_yUy_lHozA",
  // authDomain: "delta-translator-ac8d6.firebaseapp.com",
  // projectId: "delta-translator-ac8d6",
  // storageBucket: "delta-translator-ac8d6.appspot.com",
  // messagingSenderId: "380358348033",
  // appId: "1:380358348033:web:84d1c7cf83b00c81159f00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
