import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '~/connections/firestore';

/**
 * A function that returns a promise that resolves when the authentication state changes.
 * @returns {Promise<User | null>} A promise that resolves to the current user or null.
 */
export const authStateChange = () =>
  new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged((user, error) => {
      unsub();
      error ? reject(error) : resolve(user);
    });
  });

/**
 * A function that logs out the current user.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 */
export const logout = async () => await signOut(auth);

/**
 * A function that logs in a user with the given email and password.
 * @param {Object} props - The login credentials.
 * @param {string} props.email - The user's email address.
 * @param {string} props.password - The user's password.
 * @returns {Promise<UserCredential>} A promise that resolves to the user's authentication credentials.
 */
export const login = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password);
