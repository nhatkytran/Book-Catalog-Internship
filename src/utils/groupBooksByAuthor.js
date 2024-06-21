const groupBooksByAuthor = books => {
  const groupedBooks = books.reduce((acc, book) => {
    book.authors.forEach(author => {
      if (!acc[author]) acc[author] = [];
      acc[author].push(book.name);
    });

    return acc;
  }, {});

  return Object.keys(groupedBooks)
    .sort()
    .reduce(
      (acc, author) => [...acc, { author, books: groupedBooks[author].sort() }],
      []
    );
};

export default groupBooksByAuthor;
