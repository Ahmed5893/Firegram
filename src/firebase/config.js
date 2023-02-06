import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9IjKsi6gtMMTz8n6fhMgVr3px6BYn59k",
  authDomain: "project-firegram-c4a52.firebaseapp.com",
  projectId: "project-firegram-c4a52",
  storageBucket: "project-firegram-c4a52.appspot.com",
  messagingSenderId: "94111053433",
  appId: "1:94111053433:web:0fc67654e9559b877786a8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFireStore,timeStamp};