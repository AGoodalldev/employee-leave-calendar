// firebase-init.js
// Loads modular Firebase SDK via ESM and exposes it on window.firebaseExports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
  getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, collection, addDoc, query, where, onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

window.firebaseExports = {
  initializeApp,
  getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
  getFirestore, doc, getDoc, setDoc, updateDoc, collection, addDoc, query, where, onSnapshot
};
