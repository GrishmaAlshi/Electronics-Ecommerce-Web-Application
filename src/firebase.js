// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "@firebase/firestore";
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
  appId: "1:885106162808:web:1c88e0bad292fed50c018d"
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
    var db = getFirestore();
      setDoc(doc(db, "Users", user.email), {
        FirstName: "",
        LastName : "",
        cart: []
      });
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

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
        LastName : "",
        cart: []
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

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
}

const logout = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log("User signed out");

  }).catch((error) => {

  }); 
}

const getCurrentUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if(user !== null) {
    return user.email;
  } else {
    return null;
  }
  
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app,
  signup,
  logout,
  signin,
  getCurrentUser,
  signInWithGoogle
};