import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBayTtDyhQHSRZUu545x3epC9imdks7PG8",
  authDomain: "e-commerce-88c6d.firebaseapp.com",
  databaseURL: "https://e-commerce-88c6d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-88c6d",
  storageBucket: "e-commerce-88c6d.appspot.com",
  messagingSenderId: "131222476082",
  appId: "1:131222476082:web:c9015ad4499eb9f419332b",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const databaseRef = firebase.database().ref();
export const ecommerce = databaseRef.child("E-Commerce");

export default firebase;
