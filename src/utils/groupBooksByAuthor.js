/**
 * Groups books by their authors and sorts them alphabetically.
 * @param {Array<Object>} books - Array of book objects to be grouped.
 * @returns {Array<Object>} Array of objects containing author and books.
 * @example
 * const books = [
 *   { name: 'Book B', authors: ['Author Z'] },
 *   { name: 'Book A', authors: ['Author A'] },
 *   { name: 'Book C', authors: ['Author A', 'Author B'] }
 * ];
 * 
 * const result = groupBooksByAuthor(books);
 * // Returns:
 * // [
 * //   {
 * //     author: 'Author A',
 * //     books: [
 * //       { name: 'Book A', authors: ['Author A'] },
 * //       { name: 'Book C', authors: ['Author A', 'Author B'] }
 * //     ]
 * //   },
 * //   {
 * //     author: 'Author B',
 * //     books: [
 * //       { name: 'Book C', authors: ['Author A', 'Author B'] }
 * //     ]
 * //   }
 * // ]
 */
const groupBooksByAuthor = books => {
  const groupedBooks = books.reduce((acc, book) => {
    book.authors.forEach(author => {
      if (!acc[author]) acc[author] = [];
      acc[author].push(book);
    });
    return acc;
  }, {});

  return Object.keys(groupedBooks).sort().reduce((acc, author) => {
    const books = groupedBooks[author].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
    );
    return [...acc, { author, books }];
  }, []);
};

export default groupBooksByAuthor;
