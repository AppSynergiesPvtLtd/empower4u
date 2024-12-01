
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARd1LWm2d8ijg51e9l-YCWPS18tNZJn8k",
  authDomain: "empower4u-31c1a.firebaseapp.com",
  projectId: "empower4u-31c1a",
  storageBucket: "empower4u-31c1a.firebasestorage.app",
  messagingSenderId: "108838167172",
  appId: "1:108838167172:web:ad38769a88190d6e1e98d1",
  measurementId: "G-SJB6ZCXZB8"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);


export { storage };

