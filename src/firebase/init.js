import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAr99jPbHMqEdUvc4FAwWfknUx9Qa_2zkw",
  authDomain: "school-58331.firebaseapp.com",
  databaseURL: "https://school-58331.firebaseio.com",
  projectId: "school-58331",
  storageBucket: "school-58331.appspot.com",
  messagingSenderId: "342385428233",
  appId: "1:342385428233:web:0efcdd47ab4ed81b87f5d8",
  measurementId: "G-D2PMKEB7TZ"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database
export default firebaseApp.firestore()
