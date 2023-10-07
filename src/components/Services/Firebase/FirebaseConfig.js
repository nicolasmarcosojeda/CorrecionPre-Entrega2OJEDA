import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAkc16fAy8JcXqYsxckyVyyS7qtlRqBdb0",
    authDomain: "mrsoccer-ecommerce.firebaseapp.com",
    projectId: "mrsoccer-ecommerce",
    storageBucket: "mrsoccer-ecommerce.appspot.com",
    messagingSenderId: "351948779762",
    appId: "1:351948779762:web:13b80d0503ae452e26606b"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)