import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  writeBatch,
} from 'firebase/firestore';

import firestore from '~/connections/firestore';
import books from '~/../dev-data/books';

const getBooksRef = () => collection(firestore, 'books');
const getBatch = () => writeBatch(firestore);

// GET ALL //////////

export const getAllBooks = async () => {
  const booksRef = getBooksRef();

  const snapshot = await getDocs(booksRef);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// DELETE //////////

export const deleteBook = async bookID =>
  await deleteDoc(doc(firestore, 'books', bookID));

// RESET //////////

const deleteAllBooks = async () => {
  const booksRef = getBooksRef();
  const batch = getBatch();

  const snapshots = await getDocs(booksRef);

  snapshots.forEach(doc => batch.delete(doc.ref));

  await batch.commit();
};

const addBooks = async (data = books) => {
  const booksRef = getBooksRef();
  const batch = getBatch();

  data.forEach((book, index) =>
    batch.set(doc(booksRef), {
      ...book,
      rating: book.rating || 0,
      // Data generated in Firestore not in a specific order,
      // so we need 'createdAt' for a sorting action later
      createdAt: new Date(Date.now() + 1000 * index),
    })
  );

  await batch.commit();
};

export const resetBooks = async () => {
  await deleteAllBooks();
  await addBooks();
};
