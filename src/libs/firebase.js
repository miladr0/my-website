import * as firebase from "firebase";
// Add the Performance Monitoring library
import "firebase/performance";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

};
console.log('firebaseConfig: ', firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAnalytics = firebase.analytics()
export const firebasePerformance = firebase.performance()
