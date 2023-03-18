import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBYqvvpcy5p5zuM2Gz0WV3CWI_Ab0WEDyQ",
  authDomain: "badfirebank.firebaseapp.com",
  projectId: "badfirebank",
  storageBucket: "badfirebank.appspot.com",
  messagingSenderId: "94606660915",
  appId: "1:94606660915:web:a5e1c3d3f5ae93d632da46",
  measurementId: "G-4M0ZWT1XTL"
};

// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
export const db = getFirestore(app);

