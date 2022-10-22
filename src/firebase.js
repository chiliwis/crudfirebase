import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjyFZFvd84Opp5MuWdqfoesiGr5eujKuw",
  authDomain: "fb-crud-react-7fa7e.firebaseapp.com",
  projectId: "fb-crud-react-7fa7e",
  storageBucket: "fb-crud-react-7fa7e.appspot.com",
  messagingSenderId: "405499835443",
  appId: "1:405499835443:web:fae6bf3e3730ba5974df46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);