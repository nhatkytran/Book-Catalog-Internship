// Stack overflow code: https://stackoverflow.com/questions/11104439/how-do-i-check-if-an-input-contains-an-isbn-using-javascript
// Formula: https://gitlab.cs.usu.edu/erik.falor/sp21-cs1440-lecturenotes/-/blob/dddc88ed463893ab9c424c10c3f8fec226d94a10/Module0/SDP_example_project-ISBN-13/Instructions.md#:~:text=Computing%20the%20ISBN%2D13%20check%20digit,-The%20check%20digit&text=It%20is%20computed%20by%20summing,in%20the%20range%200%2D9%20.

const isValidIsbn13 = rawIsbn => {
  const isbn = rawIsbn.replace(/[^0-9X]/gi, '');

  if (isbn.length !== 13) return false;

  const sum = Array.from(Array(isbn.length)).reduce((acc, cur, index) => {
    const digit = parseInt(isbn[index]);

    return acc + (index % 2 === 0 ? digit : 3 * digit);
  }, 0);

  return sum % 10 === 0;
};

const books = [
  {
    name: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    authors: ['Martin, Robert'],
    publicationYear: 2011,
    rating: 9,
    isbn: '978-0137081073',
  },
  {
    name: '7 Habits Of Highly Effective People',
    authors: ['Covey, Stephen R.'],
    publicationYear: 2004,
    rating: 9,
    isbn: '978-1863500296',
  },
  {
    name: 'The Color of Magic',
    authors: ['Pratchett, Terry'],
    publicationYear: 2013,
    rating: 8,
    isbn: '978-0062225672',
  },
  {
    name: 'Press Reset: Ruin and Recovery in the Video Game Industry',
    authors: ['Jason Schreier'],
    publicationYear: 2021,
    rating: 10,
  },
  {
    name: 'The Inmates Are Running the Asylum',
    authors: ['Cooper, Alan'],
    publicationYear: 2004,
    rating: 8,
    isbn: '978-0672326141',
  },
  {
    name: 'The Three Musketeers',
    authors: ['Alexandre Dumas'],
  },
  {
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: ['Robert C. Martin'],
    publicationYear: 2008,
    rating: 9,
    isbn: '978-0132350884',
  },
  {
    name: 'George and the Big Bang',
    authors: ['Hawking', 'Stephen', 'Lucy'],
    publicationYear: 2013,
    isbn: '978-1442440067',
  },
];

console.log(
  books
    .filter(book => book.isbn)
    .every(({ isbn }) => {
      const isIsbn = isValidIsbn13(isbn);
      return isIsbn;
    })
);

export default isValidIsbn13;
