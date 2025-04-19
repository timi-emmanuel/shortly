// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4U-_gJIA-weYUPbszo62gKBIbmN5VMzU",
  authDomain: "shortly-app-d16e9.firebaseapp.com",
  projectId: "shortly-app-d16e9",
  storageBucket: "shortly-app-d16e9.firebasestorage.app",
  messagingSenderId: "405795424739",
  appId: "1:405795424739:web:86c6c829d55f0c3ecdb8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }