import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider}  from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth";

import 'firebase/database';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyArYNiKi8U8CFO5YVEATxMU56iDuvkRSJ8",
    authDomain: "quantum-hunt.firebaseapp.com",
    projectId: "quantum-hunt",
    storageBucket: "quantum-hunt.appspot.com",
    messagingSenderId: "813492361673",
    appId: "1:813492361673:web:b2adb05e1f09f32edef018"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getDatabase(app);

const provider = new GoogleAuthProvider();
const Facebookprovider= new FacebookAuthProvider();


export  {auth,provider,Facebookprovider}