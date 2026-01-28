// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfVZxDC34Gw51AzCtSCM-VQzT4fbaErlY",
  authDomain: "marks-app-b12ff.firebaseapp.com",
  projectId: "marks-app-b12ff",
  storageBucket: "marks-app-b12ff.firebasestorage.app",
  messagingSenderId: "551690319274",
  appId: "1:551690319274:web:2cf537bb07b37864fce7d3",
  measurementId: "G-LK39BE4YXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
