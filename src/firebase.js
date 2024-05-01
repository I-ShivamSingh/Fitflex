import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeDQDBBPPe9UDdqvQPvbl_ciRkpVJTE6M",
  authDomain: "fitflex-21c1f.firebaseapp.com",
  projectId: "fitflex-21c1f",
  storageBucket: "fitflex-21c1f.appspot.com",
  messagingSenderId: "288917221632",
  appId: "1:288917221632:web:396d7c62a31c191d2dc3e5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
