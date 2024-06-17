import { collection, doc, getDocs, writeBatch } from 'firebase/firestore';

import { BOOKS_COLLECTION_NAME } from '~/config';
import firestore from '~/connections/firestore';
import books from '~/../dev-data/books';

export const getAllBooks = async () => {
  const booksRef = collection(firestore, BOOKS_COLLECTION_NAME);

  const snapshot = await getDocs(booksRef);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const deleteAllBooks = async () => {
  const booksRef = collection(firestore, BOOKS_COLLECTION_NAME);
  const batch = writeBatch(firestore);

  const snapshots = await getDocs(booksRef);

  snapshots.forEach(doc => batch.delete(doc.ref));

  await batch.commit();
};

const addBooks = async (data = books) => {
  const booksRef = collection(firestore, BOOKS_COLLECTION_NAME);
  const batch = writeBatch(firestore);

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
