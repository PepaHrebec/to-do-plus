import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_LOCAL,
  authDomain: "to-do-plus-89c79.firebaseapp.com",
  projectId: "to-do-plus-89c79",
  storageBucket: "to-do-plus-89c79.appspot.com",
  messagingSenderId: "897685110014",
  appId: "1:897685110014:web:011e0ae2d3b8dc94a9f9af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };
