import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDrQAU7FK1dvfBNQSqcDYZz6UtDg4LAzbY",
    authDomain: "teste-treinazap.firebaseapp.com",
    projectId: "teste-treinazap",
    storageBucket: "teste-treinazap.appspot.com",
    messagingSenderId: "737409033807",
    appId: "1:737409033807:web:d00610d1d5204e525d2c3a"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
