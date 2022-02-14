import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAyE-vCAsMRYKRoAB1PSnNEdvGXgLo04vE",
    authDomain: "hd-shop-ed50a.firebaseapp.com",
    projectId: "hd-shop-ed50a",
    storageBucket: "hd-shop-ed50a.appspot.com",
    messagingSenderId: "860702537875",
    appId: "1:860702537875:web:53783f2d52e9f31215f566",
    measurementId: "G-JQRRFN9YMG"
  };


export const app=initializeApp(firebaseConfig)
export const storage=getStorage(app)