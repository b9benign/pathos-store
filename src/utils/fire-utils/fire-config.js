import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXP2Cwy87v9SZ_ePUtAK0I7SJD_0EYoCk",
  authDomain: "hera-store-e5a98.firebaseapp.com",
  projectId: "hera-store-e5a98",
  storageBucket: "hera-store-e5a98.appspot.com",
  messagingSenderId: "354602318048",
  appId: "1:354602318048:web:11cc479d2a6d7ff582b885"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});