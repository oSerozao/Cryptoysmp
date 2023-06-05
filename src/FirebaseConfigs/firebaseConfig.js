
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
//kperez
const firebaseConfig = {
  apiKey: "AIzaSyDEnwEy8OL_PZrfa0WuTHlrqPjRO6NSgzA",
  authDomain: "marketplace-b8b70.firebaseapp.com",
  projectId: "marketplace-b8b70",
  storageBucket: "marketplace-b8b70.appspot.com",
  messagingSenderId: "492305868198",
  appId: "1:492305868198:web:07e0969b5d7ec01a725b67"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)