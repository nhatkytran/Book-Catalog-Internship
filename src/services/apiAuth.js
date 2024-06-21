import { auth } from '~/connections/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authStateChange = () =>
  new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged((user, error) => {
      unsub();
      error ? reject(error) : resolve(user);
    });
  });

export const logout = async () => await signOut(auth);

export const login = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password);
