// src/db.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCIiWP0n_gP24O2tcLYjP_B7GMrocFEcQ",
  authDomain: "my-firebase-project-dd326.firebaseapp.com",
  projectId: "my-firebase-project-dd326",
  storageBucket: "my-firebase-project-dd326.appspot.com",
  messagingSenderId: "978656177433",
  appId: "1:978656177433:web:816312cfa27a8b9d4b6988",
};

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
