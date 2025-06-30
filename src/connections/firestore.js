import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

/** Initialize Firebase. */
initializeApp({
  apiKey: 'AIzaSyCpiPbB6xXj_upEcN_k39gFCe2eoJ1KoKw',
  authDomain: 'book-catalog-internship.firebaseapp.com',
  projectId: 'book-catalog-internship',
  storageBucket: 'book-catalog-internship.appspot.com',
  messagingSenderId: '72645325280',
  appId: '1:72645325280:web:a33a4eb88ac5e1bba43b85',
});

const firestore = getFirestore();
const auth = getAuth();

export { firestore, auth };
