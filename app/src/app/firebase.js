// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMtkXxURA6nTKyEIl7foNNhn0S6VkEfVA",
  authDomain: "bootcamp-blog-a9168.firebaseapp.com",
  projectId: "bootcamp-blog-a9168",
  storageBucket: "bootcamp-blog-a9168.appspot.com",
  messagingSenderId: "1011531468100",
  appId: "1:1011531468100:web:924ab989077bc43445db11",
  measurementId: "G-4PM6D6JE69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);