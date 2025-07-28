import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDozCvQxUY9iI2avch1Q1rzGKKEqBsQWxw",
  authDomain: "comino-express-app.firebaseapp.com",
  projectId: "comino-express-app",
  storageBucket: "comino-express-app.firebasestorage.app",
  messagingSenderId: "652759597547",
  appId: "1:652759597547:web:2e0395a43d6c4f0472d9ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 