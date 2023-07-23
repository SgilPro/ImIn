import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtC4Igk-YOnzgOg-c0y7OQKFuI3WmPNgE",
  authDomain: "imin-79c6a.firebaseapp.com",
  projectId: "imin-79c6a",
  storageBucket: "imin-79c6a.appspot.com",
  messagingSenderId: "1078181989085",
  appId: "1:1078181989085:web:23adaabd1ee1e4a6d12934",
  measurementId: "G-8L1EB6F024"
};

if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();