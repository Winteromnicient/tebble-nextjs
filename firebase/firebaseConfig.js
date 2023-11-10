// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCRIt0t6ieQy8veDUKEkdRkcRusaXJpXuU",
  authDomain: "tebble-9b36e.firebaseapp.com",
  projectId: "tebble-9b36e",
  storageBucket: "tebble-9b36e.appspot.com",
  messagingSenderId: "785220349482",
  appId: "1:785220349482:web:263424692d7725c0e81d53",
  measurementId: "G-LSDYZDP3FZ"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  

export { firebaseApp };