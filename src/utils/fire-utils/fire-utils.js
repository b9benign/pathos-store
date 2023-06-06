import { initializeApp } from "firebase/app";
import { 
  doc, 
  getDoc,
  setDoc, 
  getFirestore,
} from 'firebase/firestore';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';



// config
const firebaseConfig = {
  apiKey: "AIzaSyCXP2Cwy87v9SZ_ePUtAK0I7SJD_0EYoCk",
  authDomain: "hera-store-e5a98.firebaseapp.com",
  projectId: "hera-store-e5a98",
  storageBucket: "hera-store-e5a98.appspot.com",
  messagingSenderId: "354602318048",
  appId: "1:354602318048:web:11cc479d2a6d7ff582b885"
};



// setup
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});



// sign in + account creation
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
}
export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await signInWithEmailAndPassword(auth, email, password);
  }
}



// db integration
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log(error);
      }
    }
    return userDocRef;
};

export const createGoogleUserDoc = async (googleUser) => {
  const userDocRef = doc(db, 'users', googleUser.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = googleUser;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  }
}
