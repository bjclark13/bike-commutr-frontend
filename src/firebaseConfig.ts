// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyABbtjxhf4XKu-GqcsY0dDNWu40VyxL-Bs',
	authDomain: 'bike-commutr.firebaseapp.com',
	projectId: 'bike-commutr',
	storageBucket: 'bike-commutr.appspot.com',
	messagingSenderId: '698119280319',
	appId: '1:698119280319:web:4f7f985ba086d7ab76980a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
	signInWithPopup(auth, authProvider);
}

export function signOut() {
	auth.signOut();
}
