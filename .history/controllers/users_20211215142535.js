import { v4 as uuid } from 'uuid';

import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAVvKMtKyv0-axIBBEtftvEMJ1pqIXo-H8",
    authDomain: "folody-9e81e.firebaseapp.com",
    projectId: "folody-9e81e",
    storageBucket: "folody-9e81e.appspot.com",
    messagingSenderId: "148914037698",
    appId: "1:148914037698:web:ec4b7cc0414ab25a93ec5b",
    measurementId: "G-XKH9MLQVZ0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const api = new Array()
const querySnapshot = await getDocs(collection(db, "folody-api"));
querySnapshot.forEach((doc) => {
    api.push(doc.data())
});
export const getUsers = async (req, res) => {
    res.json(api);

}