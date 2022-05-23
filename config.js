import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDQuUS6ICMdWtH4Y57oBIo6AYxCqD9-1po",
    authDomain: "ebike-1af9d.firebaseapp.com",
    projectId: "ebike-1af9d",
    storageBucket: "ebike-1af9d.appspot.com",
    messagingSenderId: "730989812748",
    appId: "1:730989812748:web:2b0860e4521375a779e229"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
