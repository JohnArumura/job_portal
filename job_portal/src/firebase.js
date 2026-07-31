import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5dNLrGkMFyiA05LUuL4-tne8lI8qiZqA",
  authDomain: "job-portal-fe8b4.firebaseapp.com",
  projectId: "job-portal-fe8b4",
  storageBucket: "job-portal-fe8b4.firebasestorage.app",
  messagingSenderId: "507599552492",
  appId: "1:507599552492:web:3ec4f6f955711f8bc1cac9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();