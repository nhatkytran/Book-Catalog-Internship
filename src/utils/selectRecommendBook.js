// Minimum years since publication for a book to be considered (3 years).
const MIN_PUBLICATION_YEARS_AGO = 3;

// Default rating value if a book's rating is not specified.
const DEFAULT_RATING = 0;

/**
 * Selects a recommended book based on the following criteria:
 * 1. Filters out books published within the last MIN_PUBLICATION_YEARS_AGO years.
 * 2. Among the remaining books, selects those with the highest rating.
 * 3. If multiple books have the same highest rating, returns one at random.
 * @param {Array<Object>} books - Array of book objects.
 */
const selectRecommendBook = books => {
  if (!Array.isArray(books) || books.length === 0) {
    throw new Error('Invalid books array!');
  }

  const currentYear = new Date().getFullYear();

  // Filter out books published within the last MIN_PUBLICATION_YEARS_AGO years.
  const filteredBooks = books.filter(book => 
    book.publicationYear && 
    book.publicationYear <= currentYear - MIN_PUBLICATION_YEARS_AGO
  );

  if (filteredBooks.length === 0) {
    throw new Error('Year difference is not fit!');
  }

  // Find the highest rating among filtered books.
  const highestRating = Math.max(
    ...filteredBooks.map(book => book.rating ?? DEFAULT_RATING)
  );

  // Get all books with the highest rating.
  const topRatedBooks = filteredBooks.filter(
    book => (book.rating ?? DEFAULT_RATING) === highestRating
  );

  // Return a random book from the top-rated books.
  return topRatedBooks[Math.floor(Math.random() * topRatedBooks.length)];
};

export default selectRecommendBook;
