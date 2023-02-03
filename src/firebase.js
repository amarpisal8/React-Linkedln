// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaRdL29agDmDnvnOvA-KvNncoxSluXzCY",
  authDomain: "linkedin-clone-c12db.firebaseapp.com",
  projectId: "linkedin-clone-c12db",
  storageBucket: "linkedin-clone-c12db.appspot.com",
  messagingSenderId: "689850504340",
  appId: "1:689850504340:web:01b0bd0ada738e5df1d081",
  measurementId: "G-2V2BW4WKT6"
};
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
