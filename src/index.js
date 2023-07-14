import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC9lqrixrzLqNRlbAysTzq0TPWeAtdzVDQ",
    authDomain: "login-cllbrxai.firebaseapp.com",
    projectId: "login-cllbrxai",
    storageBucket: "login-cllbrxai.appspot.com",
    messagingSenderId: "262959012076",
    appId: "1:262959012076:web:96537a2019a26690d3edc9",
    measurementId: "G-TNYYNGPJQ4"
};

const firebaseApp = initializeApp(firebaseConfig);