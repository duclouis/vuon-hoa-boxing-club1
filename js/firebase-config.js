import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBF6gaTMgmsr0Nt3q9ZM7291GJBZDy6RAw",
  authDomain: "vuon-hoa-boxing.firebaseapp.com",
  projectId: "vuon-hoa-boxing",
  storageBucket: "vuon-hoa-boxing.firebasestorage.app",
  messagingSenderId: "444704793319",
  appId: "1:444704793319:web:bf78a2f53f5d7298a53842",
  measurementId: "G-94PQD067P8"
};

export const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ocoqfbg8/image/upload";
export const CLOUDINARY_PRESET = "boxing_avatar";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export function sanitizeInput(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}