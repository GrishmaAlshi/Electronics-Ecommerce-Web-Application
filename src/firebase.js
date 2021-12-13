// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlPQUCFeg-UI2zfG1f_xE3GBXH8D8Rdyg",
  authDomain: "webdev-demo-b3f8d.firebaseapp.com",
  databaseURL: "https://webdev-demo-b3f8d-default-rtdb.firebaseio.com",
  projectId: "webdev-demo-b3f8d",
  storageBucket: "webdev-demo-b3f8d.appspot.com",
  messagingSenderId: "1064464019118",
  appId: "1:1064464019118:web:cabf3b76eff400de5d073f",
  measurementId: "G-8LFRGVF5TQ",
};

const signup = (email, password, firstName, lastName) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      var db = getFirestore();
      setDoc(doc(db, "Users", email), {
        FirstName: "",
        LastName: "",
        cart: [],
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

const signin = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User logged in");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
};

const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {});
};

const getCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    return user.email;
  } else {
    return null;
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app, signup, logout, signin, getCurrentUser };
