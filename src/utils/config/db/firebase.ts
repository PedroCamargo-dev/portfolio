import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDm20pIjv227CV22e9J38ArevwrAbL3sYs",
  authDomain: "portfolio-a2b04.firebaseapp.com",
  projectId: "portfolio-a2b04",
  storageBucket: "portfolio-a2b04.appspot.com",
  messagingSenderId: "1059932176117",
  appId: "1:1059932176117:web:da27e5f4be5cd37dc98fbc",
  measurementId: "G-ZK942FKNQ8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export default app;
