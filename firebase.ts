import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfOddUscbZij5K0HmfTrALh4VovfKINxE",
  authDomain: "chatgpt-clone-fe04a.firebaseapp.com",
  projectId: "chatgpt-clone-fe04a",
  storageBucket: "chatgpt-clone-fe04a.appspot.com",
  messagingSenderId: "107003523806",
  appId: "1:107003523806:web:09af43a97e35b8cc97884f",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
