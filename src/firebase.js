import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDCn0F3Xb7Y8H_q3iLk3CvP32YDBWR0ss",
  authDomain: "clone-c01a7.firebaseapp.com",
  projectId: "clone-c01a7",
  storageBucket: "clone-c01a7.appspot.com",
  messagingSenderId: "527334847155",
  appId: "1:527334847155:web:3c9e437c9508e5c3e876c6",
  measurementId: "G-FHXYKBNWYX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
