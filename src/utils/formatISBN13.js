/**
 * Formats an ISBN-13 number.
 * @param {string|number} rawISBN - The ISBN to format.
 */
const formatISBN13 = rawISBN =>
  `${rawISBN}`.slice(0, 3) + '-' + `${rawISBN}`.slice(3);

export default formatISBN13;
