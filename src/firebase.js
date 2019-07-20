import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBgdU1PfwUQ9omW011_w_DWfLDGdgULAcQ',
  authDomain: 'svelte-todo-9b0e4.firebaseapp.com',
  databaseURL: 'https://svelte-todo-9b0e4.firebaseio.com',
  projectId: 'svelte-todo-9b0e4',
  storageBucket: '',
  messagingSenderId: '637607817320',
  appId: '1:637607817320:web:1e64e0abbca69da3',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
