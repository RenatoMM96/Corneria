  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  var firebaseConfig = {
    apiKey: "AIzaSyAAsEwNum7SuWzU3JCfnvCggcbXVJHtJHY",
    authDomain: "corneria-lylat.firebaseapp.com",
    databaseURL: "https://corneria-lylat.firebaseio.com",
    projectId: "corneria-lylat",
    storageBucket: "corneria-lylat.appspot.com",
    messagingSenderId: "22249755070",
    appId: "1:22249755070:web:d072dcc97b0519da56e9ef",
    measurementId: "G-HLX4XHRFEX"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
//  firebaseApp.firestore().settings({ timestampsInSnapshots: true})
  firebase.analytics();
  export default firebaseApp.firestore()
