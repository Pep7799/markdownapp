import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyBNg3q59ZvEZ7OlMvI6O_dU2yn32AhhlQg",
  authDomain: "markdown-d8f90.firebaseapp.com",
  projectId: "markdown-d8f90",
  storageBucket: "markdown-d8f90.appspot.com",
  messagingSenderId: "430356704246",
  appId: "1:430356704246:web:e35423dccf1504c4b375d7",
  measurementId: "G-YMFQP6PEMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;