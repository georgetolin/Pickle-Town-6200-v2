/**
 * PickleTown 6200 — Firebase Configuration
 * ─────────────────────────────────────────
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (or use an existing one)
 * 3. Click "Add app" → Web (</>)
 * 4. Copy your firebaseConfig values below
 * 5. Enable Realtime Database:
 *      - Build → Realtime Database → Create Database
 *      - Start in test mode, then apply security rules below
 * 6. Enable Authentication:
 *      - Build → Authentication → Sign-in method
 *      - Enable: Google, Facebook (requires Facebook App ID + Secret)
 *      - Enable: Email/Password (for admin login)
 * 7. Add your domain to authorized domains:
 *      - Authentication → Settings → Authorized domains
 *      - Add: dumapicklecourtfinder.online
 *
 * FACEBOOK AUTH EXTRA STEPS:
 * - Create an app at https://developers.facebook.com
 * - Add "Facebook Login" product
 * - Copy App ID + App Secret into Firebase Console
 * - Add OAuth redirect URI from Firebase Console into Facebook app
 *
 * SECURITY RULES (paste into Firebase → Realtime Database → Rules):
 * {
 *   "rules": {
 *     "courts":        { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin' || (auth != null && root.child('users').child(auth.uid).child('courtId').val() === $courtId)" },
 *     "games":         { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "events":        { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "players":       { ".read": true, ".write": "auth != null" },
 *     "sponsors":      { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "announcements": { ".read": true, ".write": "auth != null && root.child('users').child(auth.uid).child('role').val() === 'admin'" },
 *     "chat":          { ".read": true, ".write": "auth != null" },
 *     "activity":      { ".read": "auth != null", ".write": "auth != null" },
 *     "users":         { ".read": "auth != null", "$uid": { ".write": "auth != null && (auth.uid === $uid || root.child('users').child(auth.uid).child('role').val() === 'admin')" } }
 *   }
 * }
 */

// ── REPLACE THESE VALUES WITH YOUR FIREBASE PROJECT CONFIG ──
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Expose globals used across all pages
const db   = firebase.database();
const auth = firebase.auth();

// Auth providers
const googleProvider   = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
