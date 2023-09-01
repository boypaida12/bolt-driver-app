// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABNC1XMAwKOlGhbyVUTQK0Ffb21zeYXAI",
  authDomain: "my-bolt-driver-db.firebaseapp.com",
  projectId: "my-bolt-driver-db",
  storageBucket: "my-bolt-driver-db.appspot.com",
  messagingSenderId: "399687067437",
  appId: "1:399687067437:web:fa01781f9502f6d96b55a4",
  measurementId: "G-1PJVVBQSVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);