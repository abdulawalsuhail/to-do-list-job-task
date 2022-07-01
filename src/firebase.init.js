// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLAEL6h0FqhcBUwgCiadGy7EdUrrcroGY",
  authDomain: "todolistjob-a767a.firebaseapp.com",
  projectId: "todolistjob-a767a",
  storageBucket: "todolistjob-a767a.appspot.com",
  messagingSenderId: "819390585206",
  appId: "1:819390585206:web:e48654b90b1712aabe0257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;