import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyClCle1QPJCYq3OROkc_UyYOanXbS8dxa8",
  authDomain: "clone-facebook-huyen.firebaseapp.com",
  databaseURL: "https://clone-facebook-huyen.firebaseio.com",
  projectId: "clone-facebook-huyen",
  storageBucket: "clone-facebook-huyen.appspot.com",
  messagingSenderId: "648189529664",
  appId: "1:648189529664:web:b40763f67a2ae8ed9059a5",
  measurementId: "G-R4N52PJMJM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
