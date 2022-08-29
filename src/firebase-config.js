import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const databaseRef = firebase.database().ref();
export const ecommerce = databaseRef.child("E-Commerce");

export default firebase;
