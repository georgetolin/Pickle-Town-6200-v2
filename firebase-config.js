/**
 * PickleTown 6200 — Firebase Configuration
 * ─────────────────────────────────────────
 * Firebase web API keys are designed to be public — they only identify
 * the project. Security is enforced by:
 *   1. Firebase Realtime Database Security Rules (who can read/write)
 *   2. Firebase Auth authorized domains (only your domain can sign in)
 *   3. Google Cloud Console API key restrictions (limit to your domain)
 *
 * SECURITY RULES (paste into Firebase → Realtime Database → Rules):
 * {
 *   "rules": {
 *     "courts":        { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "games":         { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "events":        { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "players":       { ".read": true, ".write": "auth != null" },
 *     "sponsors":      { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "announcements": { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "chat":          { ".read": true, ".write": "auth != null" },
 *     "activity":      { ".read": "auth != null", ".write": "auth != null" },
 *     "users":         { ".read": "auth != null", "$uid": { ".write": "auth != null && (auth.uid === $uid || root.child('users').child(auth.uid).child('role').val() === 'admin')" } },
 *     "court_submissions": { ".read": "auth != null", ".write": "auth != null" },
 *     "court_owner_assignments": { ".read": "auth != null", ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" }
 *   }
 * }
 */

const firebaseConfig = {
  apiKey:            "AIzaSyDdAOu8gUrGrqHEcPR-bGBSRivIJzYRz2U",
  authDomain:        "dumapicklecourtfinder.firebaseapp.com",
  databaseURL:       "https://dumapicklecourtfinder-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "dumapicklecourtfinder",
  storageBucket:     "dumapicklecourtfinder.firebasestorage.app",
  messagingSenderId: "382392528490",
  appId:             "1:382392528490:web:b901cf5caba092d845a413",
  measurementId:     "G-1FL4S553VL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Expose globals used across all pages
const db   = firebase.database();
const auth = firebase.auth();

// Auth providers
const googleProvider   = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
