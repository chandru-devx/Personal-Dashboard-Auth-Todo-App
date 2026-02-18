// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth
import { getAuth } from "firebase/auth";

// firestore db
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcRzt95Ys6uD4zLF2clMIvoN4tj3BQEvE",
    authDomain: "personal-dashboard-cf8e5.firebaseapp.com",
    projectId: "personal-dashboard-cf8e5",
    storageBucket: "personal-dashboard-cf8e5.firebasestorage.app",
    messagingSenderId: "437627790562",
    appId: "1:437627790562:web:eb02ec8b0f9bad58f0aabb"
};

// Initialize Firebase
// initialize
const app = initializeApp(firebaseConfig);

// services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;