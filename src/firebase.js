import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBAJDomXQngHniLroyoMNdM_Ag8m7xe7Zo",

  authDomain: "task-manager-4d52f.firebaseapp.com",

  projectId: "task-manager-4d52f",

  storageBucket: "task-manager-4d52f.appspot.com",

  messagingSenderId: "110328316754",

  appId: "1:110328316754:web:65f85eb2a28a7769efb08b"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;