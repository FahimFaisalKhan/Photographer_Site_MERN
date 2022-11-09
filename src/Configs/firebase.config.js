// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXK5T-dN1Wbhr-S0yGH2lYUxwkZ1iWOVg",
  authDomain: "review-site-auth.firebaseapp.com",
  projectId: "review-site-auth",
  storageBucket: "review-site-auth.appspot.com",
  messagingSenderId: "847870393607",
  appId: "1:847870393607:web:b0dd113a7c613f061519a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
