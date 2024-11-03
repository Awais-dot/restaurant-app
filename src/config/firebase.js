// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'alzasyb2pvld8sEoKkXCtjdOKoqSMVidv_P5Akw',
  authDomain:'e-commerce-store-abc2.firebase.com',
  projectId: 'e-commerce-store-abc2',
  storageBucket: 'e-commerce-store-abc2.firebasestorage.app',
  messagingSenderId:'536842351700',
  appId:'1:536842351700:web:668d2a2a21d7f8dd3dffa9c1',
  measurementId:'G-K48ny7v0jx'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore };
