// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUscQOlZ-2KkHEBFQCtyX7kSnMDj--MF8",
  authDomain: "dentist-rita.firebaseapp.com",
  projectId: "dentist-rita",
  storageBucket: "dentist-rita.appspot.com",
  messagingSenderId: "15337862857",
  appId: "1:15337862857:web:1e0d6419689392c1393f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;