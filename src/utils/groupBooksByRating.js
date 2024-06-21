const groupBooksByRating = books => {
  const groupedBooks = books.reduce((acc, book) => {
    const rating = book.rating || 0;

    if (!acc[rating]) acc[rating] = [];
    acc[rating].push(book.name);

    return acc;
  }, {});

  return Object.keys(groupedBooks)
    .sort((a, b) => b - a)
    .reduce(
      (acc, rating) => [...acc, { rating, books: groupedBooks[rating].sort() }],
      []
    );
};

export default groupBooksByRating;
