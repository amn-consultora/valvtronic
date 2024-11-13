// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyR7AOQd7xbeZ7_ESk2GSz1zbWySESfm8",
  authDomain: "valvtronic-535f4.firebaseapp.com",
  projectId: "valvtronic-535f4",
  storageBucket: "valvtronic-535f4.appspot.com",
  messagingSenderId: "964749251866",
  appId: "1:964749251866:web:72fd5307329ea8ec7b48a3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;