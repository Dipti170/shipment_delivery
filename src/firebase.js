// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyDtafmsOfryHFRC9z0CqJSpaeKD_KwBcz0",
//   authDomain: "timberflow-170.firebaseapp.com",
//   projectId: "timberflow-170",
//   storageBucket: "timberflow-170.appspot.com",
//   messagingSenderId: "394842183167",
//   appId: "1:394842183167:web:26ad38b7a39ce45aaf83ca"
// };

// // ⚙️ Firebase App Init
// const app = initializeApp(firebaseConfig);

// // 🔒 Firebase Auth and Firestore Export
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };
// export default app;

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtafmsOfryHFRC9z0CqJSpaeKD_KwBcz0",
  authDomain: "timberflow-170.firebaseapp.com",
  projectId: "timberflow-170",
  storageBucket: "timberflow-170.appspot.com",
  messagingSenderId: "394842183167",
  appId: "1:394842183167:web:26ad38b7a39ce45aaf83ca",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ Only export what you're using

