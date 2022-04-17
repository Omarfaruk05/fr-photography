// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31jRb2MK3O4j38-TWMryRLnFC1a6G6AQ",
  authDomain: "fr-photography.firebaseapp.com",
  projectId: "fr-photography",
  storageBucket: "fr-photography.appspot.com",
  messagingSenderId: "537341503393",
  appId: "1:537341503393:web:3205114d030480412f0de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;