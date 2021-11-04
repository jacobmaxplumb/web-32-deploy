import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAsv4DSoh4CnGrzINMyeKoCJY9meDs_2gU",
  authDomain: "deploying-web.firebaseapp.com",
  projectId: "deploying-web",
  storageBucket: "deploying-web.appspot.com",
  messagingSenderId: "535987664939",
  appId: "1:535987664939:web:5ed3bae49ce64236ccd26e",
  measurementId: "G-7QW9LXRJXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => {
    signInWithPopup(auth, provider).then(res => {
        window.localStorage.setItem('token', res.user.accessToken);
    })
}

export const logOut = () => {
    signOut(auth).then(() => {
        window.localStorage.clear();
    })
}