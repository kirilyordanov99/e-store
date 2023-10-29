// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOhBNuH03a3BFkB9Y4x6VhyOLGlKHPCrE",
  authDomain: "e-store-88ee2.firebaseapp.com",
  projectId: "e-store-88ee2",
  storageBucket: "e-store-88ee2.appspot.com",
  messagingSenderId: "206208772406",
  appId: "1:206208772406:web:878814f861130868f1eb97",
  measurementId: "G-9J432BN6GQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Export the Firebase auth object

export { auth }; 
