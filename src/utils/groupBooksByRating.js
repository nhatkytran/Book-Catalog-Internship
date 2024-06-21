const groupBooksByRating = books => {
  const groupedBooks = books.reduce((acc, book) => {
    const rating = book.rating || 0;

    if (!acc[rating]) acc[rating] = [];
    acc[rating].push(book);

    return acc;
  }, {});

  return Object.keys(groupedBooks)
    .sort((a, b) => b - a)
    .reduce(
      (acc, rating) => [
        ...acc,
        {
          rating,
          books: groupedBooks[rating].sort((a, b) =>
            a.name <= b.name ? -1 : 1
          ),
        },
      ],
      []
    );
};

export default groupBooksByRating;
