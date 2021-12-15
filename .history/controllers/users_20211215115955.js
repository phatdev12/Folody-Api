import { v4 as uuid } from 'uuid';
import { collection, getDocs } from "firebase/firestore"; 

import users from "../data.json";

import { initializeApp } from "firebase/app"
import { collection, getDocs } from "firebase/firestore"
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
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};