// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP5q0Nqwo_OzBq_rqvUVo9Szgd2sCXHPE",
    authDomain: "click-with-jack.firebaseapp.com",
    projectId: "click-with-jack",
    storageBucket: "click-with-jack.appspot.com",
    messagingSenderId: "253996472366",
    appId: "1:253996472366:web:10ec6ad3e18da7586b67bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;