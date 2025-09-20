
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCD2ztqJmbWn8eGRxUKppjKeVcFipB7kmI",
    authDomain: "mockmate-206fe.firebaseapp.com",
    projectId: "mockmate-206fe",
    storageBucket: "mockmate-206fe.firebasestorage.app",
    messagingSenderId: "881593192002",
    appId: "1:881593192002:web:8ae74b61538a8b567b67db",
    measurementId: "G-PWBQGN25NP"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);