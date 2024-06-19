// A good book should be published at least 3 years ago or earlier.
// From all these books you should pick ones with the highest rating.
// If there are several good books matching the criteria - pick one at random.

const selectRecommendBook = books => {
  // Filter year //////////
  const currentYear = new Date().getFullYear();

  const filteredBooks = books.filter(
    book => book.publicationYear && book.publicationYear <= currentYear - 3
  );

  // Filter rating /////////
  const highestRating = Math.max(
    ...filteredBooks.map(book => book.rating || 0)
  );

  const topRatedBooks = filteredBooks.filter(
    book => book.rating === highestRating
  );

  // Select randomly //////////

  return topRatedBooks[Math.floor(Math.random() * topRatedBooks.length)];
};

export default selectRecommendBook;
