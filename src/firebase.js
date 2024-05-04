import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASopBcG5m7K_09n8PUiGbg7M5ANQFYREk",
  authDomain: "fitflex-cfcab.firebaseapp.com",
  projectId: "fitflex-cfcab",
  storageBucket: "fitflex-cfcab.appspot.com",
  messagingSenderId: "242822208852",
  appId: "1:242822208852:web:8ebf900a9574f5c0287cc1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
