import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, writeBatch } from 'firebase/firestore';

import { firestore } from '~/connections/firestore';
import books from '~/../dev-data/books';

const BOOKS_COLLECTION = 'books';
const DEFAULT_TIMESTAMP_MS = 1000;
const DEFAULT_BOOK_RATING = 0;

/**
 * Returns a reference to the 'books' collection in the Firestore database.
 * @returns {CollectionReference} A reference to the 'books' collection in the Firestore database.
 */
const getBooksRef = () => collection(firestore, BOOKS_COLLECTION);

/**
 * Returns a reference to a specific book document in the Firestore database.
 * @param {string} bookID - The ID of the book document to retrieve.
 * @returns {DocumentReference} A reference to the book document in the Firestore database.
 */
const getBookRef = bookID => doc(firestore, BOOKS_COLLECTION, bookID);

/**
 * Retrieves all books from the Firestore collection.
 * @returns {Promise<Array<Object>>} An array of book objects.
 */
export const getAllBooks = async () => {
  const booksRef = getBooksRef();

  const snapshot = await getDocs(booksRef);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Adds a new book to the Firestore collection.
 * @param {Object} book - The book object to add.
 * @returns {Promise<DocumentReference>} A reference to the added book document.
 */
export const addBook = async book => await addDoc(getBooksRef(), book);

/**
 * Updates an existing book in the Firestore collection.
 * @param {Object} book - The book object to update.
 * @returns {Promise<void>}
 */
export const editBook = async ({ id, ...book }) =>
  await updateDoc(getBookRef(id), book);

/**
 * Deletes a book from the Firestore collection.
 * @param {string} bookID - The ID of the book to delete.
 * @returns {Promise<void>}
 */
export const deleteBook = async bookID => await deleteDoc(getBookRef(bookID));

/**
 * Deletes all documents from the specified Firestore collection reference using a batch operation.
 * @param {WriteBatch} batch - The Firestore batch instance to use for the operation.
 * @param {CollectionReference} booksRef - Reference to the Firestore collection to clear.
 * @returns {Promise<void>}
 */
const deleteAllBooks = async (batch, booksRef) => {
  const snapshots = await getDocs(booksRef);
  snapshots.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
};

/**
 * Adds multiple books to the specified Firestore collection using a batch operation.
 * @param {WriteBatch} batch - The Firestore batch instance to use for the operation.
 * @param {CollectionReference} booksRef - Reference to the Firestore collection to add books to.
 * @param {Array<Object>} data - Array of book objects to add.
 * @returns {Promise<void>}
 */
const addBooks = async (batch, booksRef, data) => {
  data.forEach((book, index) => {
    // Unique timestamps for consistent bulk sorting on Firestore.
    const createdAt = new Date(Date.now() + DEFAULT_TIMESTAMP_MS * index);
    batch.set(doc(booksRef), { ...book, rating: book.rating || DEFAULT_BOOK_RATING, createdAt });
  });

  await batch.commit();
};

/**
 * Resets the books collection by first deleting all existing books and then adding default books.
 * @returns {Promise<void>}
 */
export const resetBooks = async () => {
  const booksRef = getBooksRef();
  await deleteAllBooks(writeBatch(firestore), booksRef);
  await addBooks(writeBatch(firestore), booksRef, books);
};
