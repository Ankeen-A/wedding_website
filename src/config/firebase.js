// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZidMn5lxch7YgDdmg2iftsURYI1yeHI",
  authDomain: "wedding-website-d345d.firebaseapp.com",
  projectId: "wedding-website-d345d",
  storageBucket: "wedding-website-d345d.firebasestorage.app",
  messagingSenderId: "839161945069",
  appId: "1:839161945069:web:d54dc6531364ac632ae5e4",
  measurementId: "G-9YWTQFNQ01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore database
export const db = getFirestore(app);