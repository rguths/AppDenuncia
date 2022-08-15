import * as firebase from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeOR3BBqGXsHRjsNeO6429gEOMtl-usLw",
  authDomain: "app-denuncia-73bdd.firebaseapp.com",
  projectId: "app-denuncia-73bdd",
  storageBucket: "app-denuncia-73bdd.appspot.com",
  messagingSenderId: "661692135703",
  appId: "1:661692135703:web:3b85d90f2e696e501cdf52",
  measurementId: "G-5ZM2CTWQYN"
};
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);