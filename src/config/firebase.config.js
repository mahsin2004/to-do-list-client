// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1QavmDsaQ7o1hJhJxP8gfvQHPW7AYGHA",
  authDomain: "to-do-lists-1.firebaseapp.com",
  projectId: "to-do-lists-1",
  storageBucket: "to-do-lists-1.appspot.com",
  messagingSenderId: "245490527293",
  appId: "1:245490527293:web:0c1d6784cdb938ec8fce54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)