import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5_x0vVH-snLVp6IEpuVMAG5WHXytzncs",
  authDomain: "smart-forest-guardian.firebaseapp.com",
  databaseURL: "https://smart-forest-guardian-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "smart-forest-guardian",
  storageBucket: "smart-forest-guardian.firebasestorage.app",
  messagingSenderId: "775877468022",
  appId: "1:775877468022:web:f7b30f5553045c0de42457",
  measurementId: "G-DNQGXLC06G"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);



