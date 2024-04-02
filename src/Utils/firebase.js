import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiwyGei5ud1F-DDT5bJEFUtBmc08lo-j0",
  authDomain: "expenses-app-9192c.firebaseapp.com",
  projectId: "expenses-app-9192c",
  storageBucket: "expenses-app-9192c.appspot.com",
  messagingSenderId: "909373312229",
  appId: "1:909373312229:web:e515ddd848b5a6edec980c",
  measurementId: "G-YG3BT8XZMT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
