// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";
import { DATA_BASE_URL } from "@env";
import { AUTH_DOMAIN } from "@env";
import { PROJECT_ID } from "@env";
import { STORAGE_BUCKET } from "@env";
import { MESSAGING_SENDER_ID } from "@env";
import { APP_ID } from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  databaseURL: DATA_BASE_URL,
  // database:
  //   "https://organizer-ee1d1-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialix=ze RealTimeDatBAse
const database = getDatabase(app);

export { db, database, auth };
