import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4Zj2CrnNfT6TVFS3Wouv41ozxGI3mf3g",
  authDomain: "imin-ba095.firebaseapp.com",
  projectId: "imin-ba095",
  storageBucket: "imin-ba095.appspot.com",
  messagingSenderId: "432392995852",
  appId: "1:432392995852:web:b9f437702088b8baa01a29",
  measurementId: "G-8177XXBMLW",
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
