const groupBooksByYear = books => {
  const groupedBooks = books.reduce((acc, book) => {
    const year = book.publicationYear || 'Books without a year';

    if (!acc[year]) acc[year] = [];
    acc[year].push(book.name);

    return acc;
  }, {});

  const sortedKeys = Object.keys(groupedBooks).sort((a, b) => {
    if (a === 'Books without a year') return 1;
    if (b === 'Books without a year') return -1;

    return b - a;
  });

  // We can't reply on object fields when it coms to number key -> use Map
  // But Map can not be iterated through using map method
  // So we return object like this
  // {
  //   keys: [key1, key2, key3],
  //   values: [value1, value2, value3]
  // }
  const sortedGroupedBooks = sortedKeys.reduce(
    (acc, year) => {
      const sortedGroupBooksAlphabet = groupedBooks[year].sort((a, b) => {
        // Sort using the first letter
        const letterA = a[0].toLowerCase();
        const letterB = b[0].toLowerCase();

        return letterA <= letterB ? -1 : 1;
      });

      acc.keys.push(year);
      acc.values.push(sortedGroupBooksAlphabet);

      return acc;
    },
    { keys: [], values: [] }
  );

  return sortedGroupedBooks;
};

export default groupBooksByYear;
