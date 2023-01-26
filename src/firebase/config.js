import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7INzzvJwMWso8uoZv6VHv3a6vReJ3Nsw",
    authDomain: "mymoney-f2d98.firebaseapp.com",
    projectId: "mymoney-f2d98",
    storageBucket: "mymoney-f2d98.appspot.com",
    messagingSenderId: "478187175702",
    appId: "1:478187175702:web:961e0d1acc6ac23a785a37"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firebase service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {
    projectFirestore,
    projectAuth,
    timestamp
}

