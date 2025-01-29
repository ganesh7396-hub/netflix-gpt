// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCst_80w7Wjxtohbcb-JavLV2fKAxTEO2w",
  authDomain: "netflix-gpt-test.firebaseapp.com",
  projectId: "netflix-gpt-test",
  storageBucket: "netflix-gpt-test.firebasestorage.app",
  messagingSenderId: "476253996685",
  appId: "1:476253996685:web:189c8546fc0489077dc4c4",
  measurementId: "G-3CNVVRCEEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);