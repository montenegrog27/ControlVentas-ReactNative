import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react"; // Tu configuración de Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDKDPEiBKGzeLS7iwhsrGjlQYHQWNENQRU",
  authDomain: "ventas-monte.firebaseapp.com",
  projectId: "ventas-monte",
  storageBucket: "ventas-monte.appspot.com",
  messagingSenderId: "1020371703019",
  appId: "1:1020371703019:web:16a339befb8fe778d85aae",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
