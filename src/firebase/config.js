// Your  web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  var firebaseConfig = {
    apiKey: "AIzaSyALoj_doCXFBVPNXJGoiiOruqqGxRcoGKo",
    authDomain: "gallery-store-6fb07.firebaseapp.com",
    projectId: "gallery-store-6fb07",
    storageBucket: "gallery-store-6fb07.appspot.com",
    messagingSenderId: "998193091888",
    appId: "1:998193091888:web:090aaee288c43ec3f724f5",
    measurementId: "G-EW29WM0Q7Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};