import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { app } from "./firestoreSetup";


// Initialize Firebase
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (email : string, password : string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name : string, email : string, password : string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(`Login succes:${user.displayName}|${user.email}`);

    // const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // const docs = await getDocs(q);
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }

  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

export function LogOut() {
  auth.signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
}














// var firebaseui = require('firebaseui');
// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// const provider = new GoogleAuthProvider();


// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });




