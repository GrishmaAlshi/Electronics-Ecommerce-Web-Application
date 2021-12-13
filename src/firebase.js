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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCWFDGujN2H1FYs2seMl72hzv6b7P00v8",
  authDomain: "webdevproject-7c916.firebaseapp.com",
  databaseURL: "https://webdevproject-7c916-default-rtdb.firebaseio.com",
  projectId: "webdevproject-7c916",
  storageBucket: "webdevproject-7c916.appspot.com",
  messagingSenderId: "885106162808",
  appId: "1:885106162808:web:1c88e0bad292fed50c018d",
};

const signup = (email, password, firstName, lastName) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("email", user.email);
      let currUser = {};
      currUser.email = localStorage.getItem("email");
      currUser.cart = [];
      currUser.wishlist = [];
      fetch("http://localhost:4000/api/users/", {
        method: "POST",
        body: JSON.stringify(currUser),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(console.log("User details added to db"));
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
      let currUser = {};
      currUser.email = localStorage.getItem("email");
      currUser.cart = [];
      currUser.wishlist = [];
      fetch("http://localhost:4000/api/users/", {
        method: "POST",
        body: JSON.stringify(currUser),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(console.log("User details added to db"));
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
