import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyANHbOKJz8KWKDPH5CHIMGAetr4CUBCNp8",
    authDomain: "tenedores-5e6ab.firebaseapp.com",
    projectId: "tenedores-5e6ab",
    storageBucket: "tenedores-5e6ab.appspot.com",
    messagingSenderId: "843424356099",
    appId: "1:843424356099:web:56a58e5d8496a872b97b36"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);