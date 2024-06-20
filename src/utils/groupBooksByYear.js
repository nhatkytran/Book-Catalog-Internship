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

  const sortedGroupedBooks = sortedKeys.reduce((acc, year) => {
    const sortedGroupBooksAlphabet = groupedBooks[year].sort((a, b) => {
      // Sort using the first letter
      const letterA = a.name[0].toLowerCase();
      const letterB = b.name[0].toLowerCase();

      return letterA <= letterB ? -1 : 1;
    });

    acc.push({ year, books: sortedGroupBooksAlphabet });
    return acc;
  }, []);

  return sortedGroupedBooks;
};

export default groupBooksByYear;
