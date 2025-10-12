import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCMWbg6wqd17eRK6-pGFmYbEWj_tntP96Y",
  authDomain: "netflix-clone-e4a8b.firebaseapp.com",
  projectId: "netflix-clone-e4a8b",
  storageBucket: "netflix-clone-e4a8b.firebasestorage.app",
  messagingSenderId: "928870655691",
  appId: "1:928870655691:web:1350f4bd7e5b211ccb9d4e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));

  }
};


const signin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));

  }
};


const signout = () => {
  signOut(auth);
};

export { auth, db, signin, signup, signout };