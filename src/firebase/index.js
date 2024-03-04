// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMyZj_-FrBGABDVqgmcvDBxw0z18GKGeE",
  authDomain: "test-otp-ba2d3.firebaseapp.com",
  projectId: "test-otp-ba2d3",
  storageBucket: "test-otp-ba2d3.appspot.com",
  messagingSenderId: "376039265122",
  appId: "1:376039265122:web:62d92df9a504c4d6cb923b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app