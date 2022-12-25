// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3OuF0s66Qwsb-34pOgYDirGp28o0s2YU",
  authDomain: "new-project-4ad72.firebaseapp.com",
  projectId: "new-project-4ad72",
  storageBucket: "new-project-4ad72.appspot.com",
  messagingSenderId: "4432542361",
  appId: "1:4432542361:web:493409bd9d9ea8e9405608"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);