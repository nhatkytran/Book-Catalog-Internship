const NO_PUBLICATION_YEAR = 'Books without a year';

/**
 * Groups books by publication year (newest first) and sorts books alphabetically by name within each year group.
 * Books without a publication year are grouped under 'Books without a year' and appear last.
 * @param {Array<Object>} books - Array of book objects to be grouped.
 * @returns {Array<Object>} Array of objects containing year and books.
 * @example
 * const books = [
 *   { name: 'Book B', authors: ['Author Z'] },
 *   { name: 'Book A', authors: ['Author A'] },
 *   { name: 'Book C', authors: ['Author A', 'Author B'] }
 * ];
 * 
 * const result = groupBooksByYear(books);
 * // Returns:
 * // [
 * //   {
 * //     year: '2024',
 * //     books: [
 * //       { name: 'Book A', authors: ['Author A'] },
 * //       { name: 'Book C', authors: ['Author A', 'Author B'] }
 * //     ]
 * //   },
 * //   {
 * //     year: '2023',
 * //     books: [
 * //       { name: 'Book B', authors: ['Author Z'] }
 * //     ]
 * //   }
 * // ]
 */
const groupBooksByYear = books => {

  // Step 1: Group books by their publication year.
  // Creates an object where keys are years and values are arrays of books from that year.
  const groupedBooks = books.reduce((acc, book) => {
    const year = String(book.publicationYear || NO_PUBLICATION_YEAR);

    if (!acc[year]) acc[year] = [];
    acc[year].push(book);

    return acc;
  }, {});

  // Step 2: Sort the years in descending order (newest first).
  // Books without a year (NO_PUBLICATION_YEAR) are always placed at the end.
  const sortedKeys = Object.keys(groupedBooks).sort((a, b) => {

    // Move NO_PUBLICATION_YEAR to the end.
    if (a === NO_PUBLICATION_YEAR) return 1;
    if (b === NO_PUBLICATION_YEAR) return -1;

    // Sort years in descending order (newest first).
    return b - a;
  });

  // Step 3: Transform the grouped object into an array of year groups
  // with books sorted alphabetically by name within each group.
  return sortedKeys.reduce((acc, year) => {
    const sortedBooks = groupedBooks[year].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
    );
    return [...acc, { year, books: sortedBooks }];
  }, []);
};

export default groupBooksByYear;
