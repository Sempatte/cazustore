import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const app = firebase.initializeApp( {
    apiKey: "AIzaSyBq0G0pxKQkSUCGX6QFVnmaqpekigBBpj4",
    authDomain: "cazustore-10283.firebaseapp.com",
    databaseURL: "http://cazustore.firebaseio.com",
    projectId: "cazustore-10283",
    storageBucket: "cazustore-10283.appspot.com",
    messagingSenderId: "797912311453",
    appId: "1:797912311453:web:ba3a92566a2252304e5674"
});



export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app);
}
