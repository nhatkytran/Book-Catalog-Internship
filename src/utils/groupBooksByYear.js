const groupBooksByYear = books => {
  const groupedBooks = books.reduce((acc, book) => {
    const year = book.publicationYear || 'Books without a year';

    if (!acc[year]) acc[year] = [];
    acc[year].push(book);

    return acc;
  }, {});

  const sortedKeys = Object.keys(groupedBooks).sort((a, b) => {
    if (a === 'Books without a year') return 1;
    if (b === 'Books without a year') return -1;

    return b - a;
  });

  return sortedKeys.reduce((acc, year) => {
    const sortedbooks = groupedBooks[year].sort((a, b) =>
      a.name <= b.name ? -1 : 1
    );

    return [...acc, { year, books: sortedbooks }];
  }, []);
};

export default groupBooksByYear;
