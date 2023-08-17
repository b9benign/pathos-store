import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  deleteDoc,
  collection,
  query,
  getDocs
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
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



// authentication + account creation
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
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if(error.code === "auth/wrong-password") {
        alert("Wrong password. For easier sign-in use your existing Google Account.");
      }
      console.log(error);
    }
  }
}
export const logUserOut = async () => {
  await signOut(auth);
  window.location.reload();
}
export const AuthStateChangeListener = (callback) => {
  onAuthStateChanged(auth, callback);
}


// auth db integration
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
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

  if (!userSnapshot.exists()) {
    const { displayName, email } = googleUser;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  }
}


// loved
export const toggleLovedItem = async (itemToToggle, userAuth) => {
  const { uid } = userAuth;
  const { id, name, price, category, brand, gender } = itemToToggle;
  const itemDocRef = doc(db, 'users', uid, 'loved', id.toString());
  const itemSnapShot = await getDoc(itemDocRef);

  if (itemSnapShot.exists()) {
    await deleteDoc(itemDocRef);
  } else {
    await setDoc(itemDocRef, {
      id,
      category,
      name,
      price,
      brand,
      gender
    });
  }
};

export const getLovedList = async (userAuth) => {
  const lovedColRef = collection(db, 'users', userAuth.uid, 'loved');
  const q = query(lovedColRef);
  const querySnapshot = await getDocs(q);

  const lovedItemsMap = querySnapshot.docs.reduce((acc, itemSnapshot) => {
    const content = itemSnapshot.data();
    const { id } = itemSnapshot;
    acc[id] = content;
    return acc;
  }, {})
  return Object.values(lovedItemsMap);
}
