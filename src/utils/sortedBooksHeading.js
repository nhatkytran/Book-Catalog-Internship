const sortedBooksHeading = ({ filter, category }) => {
  if (filter === 'year')
    return Number(category) ? `First published in ${category}` : category;

  if (filter === 'author') return `By author: ${category}`;

  if (filter === 'rating')
    return Number(category)
      ? `Rating: ${category}/10`
      : `Books without a rating`;
};

export default sortedBooksHeading;
