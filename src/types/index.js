import { shape, arrayOf, string, number, object } from 'prop-types';

export const bookShape = shape({
  id: string.isRequired,
  name: string.isRequired,
  authors: arrayOf(string),
  publicationYear: number,
  rating: number,
  isbn: number,
  createdAt: object,
});
