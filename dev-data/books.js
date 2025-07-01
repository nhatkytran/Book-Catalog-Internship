/**
 * @typedef {Object} Book
 * @property {string} name - The title of the book (required).
 * @property {string[]} authors - Array of author names (required).
 * @property {number|null} [publicationYear] - The year the book was published, or null if not available.
 * @property {number|null} [rating] - The book's rating (0-10 scale), or null if not available.
 * @property {number|null} [isbn] - The book's ISBN-13 number (without hyphens), or null if not available.
 */

/** @type {Book[]} */
const books = [
  {
    name: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    authors: ['Martin', 'Robert'],
    publicationYear: 2011,
    rating: 9,
    isbn: 9780137081073,
  },
  {
    name: '7 Habits Of Highly Effective People',
    authors: ['Covey', 'Stephen R.'],
    publicationYear: 2004,
    rating: 9,
    isbn: 9781863500296,
  },
  {
    name: 'The Color of Magic',
    authors: ['Pratchett', 'Terry'],
    publicationYear: 2013,
    rating: 8,
    isbn: 9780062225672,
  },
  {
    name: 'Press Reset: Ruin and Recovery in the Video Game Industry',
    authors: ['Jason Schreier'],
    publicationYear: 2021,
    rating: 10,
    isbn: null,
  },
  {
    name: 'The Inmates Are Running the Asylum',
    authors: ['Cooper', 'Alan'],
    publicationYear: 2004,
    rating: 8,
    isbn: 9780672326141,
  },
  {
    name: 'The Three Musketeers',
    authors: ['Alexandre Dumas'],
    publicationYear: null,
    rating: null,
    isbn: null,
  },
  {
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: ['Robert C. Martin'],
    publicationYear: 2008,
    rating: 9,
    isbn: 9780132350884,
  },
  {
    name: 'George and the Big Bang',
    authors: ['Hawking', 'Stephen', 'Lucy'],
    publicationYear: 2013,
    rating: null,
    isbn: 9781442440067,
  },
];

export default books;
