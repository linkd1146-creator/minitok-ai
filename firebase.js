import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRbZaikbDC2GuWIfL7OWalXY81nvSd_DA",
  authDomain: "minitok-bd7c1.firebaseapp.com",
  projectId: "minitok-bd7c1",
  storageBucket: "minitok-bd7c1.firebasestorage.app",
  messagingSenderId: "507499794732",
  appId: "1:507499794732:web:6f97c616d022e8beb79c89"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
