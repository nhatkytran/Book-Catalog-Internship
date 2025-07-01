/**
 * Groups books by their rating and sorts them alphabetically by book name within each rating group.
 * Books without a rating are treated as having a rating of 0.
 * @param {Array<Object>} books - Array of book objects to be grouped
 * @returns {Array<{rating: number, books: Array<Object>}>} Array of rating groups with sorted books,
 * where each group contains a rating and an array of books sorted alphabetically by name.
 * The groups are sorted by rating in descending order (highest rating first).
 * 
 * @example
 * const books = [
 *   { name: 'Book A', rating: 8 },
 *   { name: 'Book C', rating: 10 },
 *   { name: 'Book B', rating: 8 },
 *   { name: 'Book D' } // No rating
 * ];
 * 
 * const result = groupBooksByRating(books);
 * // Returns:
 * // [
 * //   {
 * //     rating: 10,
 * //     books: [{ name: 'Book C', rating: 10 }]
 * //   },
 * //   {
 * //     rating: 8,
 * //     books: [
 * //       { name: 'Book A', rating: 8 },
 * //       { name: 'Book B', rating: 8 }
 * //     ]
 * //   }
 * // ]
 */
const groupBooksByRating = books => {
  const groupedBooks = books.reduce((acc, book) => {
    const rating = book.rating || 0;

    if (!acc[rating]) acc[rating] = [];
    acc[rating].push(book);

    return acc;
  }, {});

  return Object.keys(groupedBooks).sort((a, b) => b - a).reduce((acc, rating) => {
    const books = groupedBooks[rating].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );    
    return [...acc, { rating, books }];
  }, []);
};

export default groupBooksByRating;
