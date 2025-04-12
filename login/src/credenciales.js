// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgyGvWmqEwSAu_eDxiQCjityOORDfS0EY",
  authDomain: "login-c43a4.firebaseapp.com",
  projectId: "login-c43a4",
  storageBucket: "login-c43a4.firebasestorage.app",
  messagingSenderId: "958014280854",
  appId: "1:958014280854:web:2ef04d4c692aecbff29eb7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;