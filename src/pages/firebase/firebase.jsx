
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDM-RPGYbBPW57XrKnAW-9_ZJ-wLX_3_r4",
    authDomain: "warrantybytes.firebaseapp.com",
    projectId: "warrantybytes",
    storageBucket: "warrantybytes.appspot.com",
    messagingSenderId: "659689062430",
    appId: "1:659689062430:web:4ec251c79f57742c1dae0f",
    measurementId: "G-ND5Y7C0NT7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get Auth instance
  const auth = getAnalytics(app);

  export {auth}

  