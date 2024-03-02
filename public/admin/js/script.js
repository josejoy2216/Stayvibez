// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDxLozU2S0lph1hLRUMq7v8cWBqs-YezXI",
    authDomain: "stayvibez-d4092.firebaseapp.com",
    databaseURL: "https://stayvibez-d4092.firebaseio.com",
    projectId: "stayvibez-d4092",
    storageBucket: "stayvibez-d4092.appspot.com",
    messagingSenderId: "907171155242",
    appId: "1:907171155242:web:457209ae319385eb28e253",
    measurementId: "G-Y1QPM38N13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();