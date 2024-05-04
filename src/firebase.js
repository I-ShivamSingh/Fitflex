import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeJVr-UYaE134V2_yv7LIUoxmJxN7Hdf0",
  authDomain: "fitflex-web-app.firebaseapp.com",
  projectId: "fitflex-web-app",
  storageBucket: "fitflex-web-app.appspot.com",
  messagingSenderId: "352445539338",
  appId: "1:352445539338:web:2926d36672aa4efd4dabf3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
