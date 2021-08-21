import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDnSTHWZ4K_H1GV5RZCCsI-z_Fy_FsLXZw",
  authDomain: "firegram-e087f.firebaseapp.com",
  projectId: "firegram-e087f",
  storageBucket: "firegram-e087f.appspot.com",
  messagingSenderId: "965300865601",
  appId: "1:965300865601:web:8a02cdaa885dc076a594c0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
