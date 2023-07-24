import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtC4Igk-YOnzgOg-c0y7OQKFuI3WmPNgE",
  authDomain: "imin-79c6a.firebaseapp.com",
  projectId: "imin-79c6a",
  storageBucket: "imin-79c6a.appspot.com",
  messagingSenderId: "1078181989085",
  appId: "1:1078181989085:web:23adaabd1ee1e4a6d12934",
  measurementId: "G-8L1EB6F024",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
