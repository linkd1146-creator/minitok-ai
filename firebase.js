import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

/* ================= FIREBASE CONFIG ================= */
const firebaseConfig = {
  apiKey: "AIzaSyDRbZaikbDC2GuWIfL7OWalXY81nvSd_DA",
  authDomain: "minitok-bd7c1.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "minitok-bd7c1",
  storageBucket:  "minitok-bd7c1.firebasestorage.app",
  messagingSenderId: "507499794732",
  appId: "1:507499794732:web:6f97c616d022e8beb79c89"
};

/* ================= INIT ================= */
const app = initializeApp(firebaseConfig);

/* ================= EXPORT DATABASE ================= */
export const db = getDatabase(app);
