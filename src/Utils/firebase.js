import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApC-hoGweTmWzv_gE5RFY7cmeqZktsuGw",
  authDomain: "netflixgpt85.firebaseapp.com",
  projectId: "netflixgpt85",
  storageBucket: "netflixgpt85.firebasestorage.app",
  messagingSenderId: "632739846660",
  appId: "1:632739846660:web:c7ab121e0247beb79bf351",
  measurementId: "G-5RQPQSW7EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();