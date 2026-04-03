// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBwUrXvffJ6lKWwBTeAcmiErDH_N2PiEk",
  authDomain: "discord-clone-80da1.firebaseapp.com",
  projectId: "discord-clone-80da1",
  storageBucket: "discord-clone-80da1.firebasestorage.app",
  messagingSenderId: "112385375312",
  appId: "1:112385375312:web:bf00a6478cb6117f5f6555",
  measurementId: "G-D05ZGN1S0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app