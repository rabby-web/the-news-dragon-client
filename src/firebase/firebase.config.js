// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMs0JEm9m0osm2apl6RyKctJ0XM9PBZDk",
  authDomain: "the-news-dragon-a4f00.firebaseapp.com",
  projectId: "the-news-dragon-a4f00",
  storageBucket: "the-news-dragon-a4f00.appspot.com",
  messagingSenderId: "678580648109",
  appId: "1:678580648109:web:67e289e8c0916d1e9c6e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;