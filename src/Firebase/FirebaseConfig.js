// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjgHLSuZ_4lYnOc9mDBpsFNWftrbM3sRE",
  authDomain: "my-ecomerce-website.firebaseapp.com",
  projectId: "my-ecomerce-website",
  storageBucket: "my-ecomerce-website.appspot.com",
  messagingSenderId: "327057368657",
  appId: "1:327057368657:web:56be6c6ff252671239fa70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB =  getFirestore(app )
const auth = getAuth(app)
export {fireDB, auth}