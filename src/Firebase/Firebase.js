// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4vs-QLEbmT1gNcsncCU5ay6FW-2QN7k",
  authDomain: "sms-project-99348.firebaseapp.com",
  projectId: "sms-project-99348",
  storageBucket: "sms-project-99348.firebasestorage.app",
  messagingSenderId: "955768852776",
  appId: "1:955768852776:web:98e9e8ad7a4e32a60e001d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;