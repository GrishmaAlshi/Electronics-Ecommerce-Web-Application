// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
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
      localStorage.setItem("email", user.email);
      var db = getFirestore();
      setDoc(doc(db, "Users", email), {
        FirstName: "",
        LastName: "",
        cart: [],
        wishlist: [],
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
      localStorage.setItem("email", user.email);
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
      localStorage.removeItem("email");
    })
    .catch((error) => {
      console.log(error);
    });
};

const getCurrentUser = () => {
  return localStorage.getItem("email");
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("email", user.email);
      var db = getFirestore();
      setDoc(doc(db, "Users", user.email), {
        FirstName: "",
        LastName: "",
        cart: [],
      });
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app, signup, logout, signin, getCurrentUser, signInWithGoogle };
