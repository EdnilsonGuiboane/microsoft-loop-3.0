// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meus-projectos-5b213.firebaseapp.com",
  projectId: "meus-projectos-5b213",
  storageBucket: "meus-projectos-5b213.appspot.com",
  messagingSenderId: "570523335719",
  appId: "1:570523335719:web:5cff1a113d40e343182202",
  measurementId: "G-YEYGFF3R1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let analytics; // Declare analytics but do not initialize yet

// Function to initialize analytics
const initAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    analytics = getAnalytics(app); // Initialize analytics only if supported
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
};

// Call the function to initialize analytics
initAnalytics();

// Export the variables
export { app, db, analytics }; // Export app, db, and analytics
