/* eslint-disable prettier/prettier */
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from 'firebase/storage';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQyJ0z7_YB-Nsq8i-hGEfW-XkWSEQHbgE",
  authDomain: "mobile-e1dd4.firebaseapp.com",
  projectId: "mobile-e1dd4",
  storageBucket: "mobile-e1dd4.appspot.com",
  messagingSenderId: "201925327039",
  appId: "1:201925327039:web:9f9361c37382bd309b2e0a"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const auth_mod = getAuth(app);

export { app, auth_mod, storage };
