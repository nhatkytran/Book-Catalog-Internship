// Stack overflow code: https://stackoverflow.com/questions/11104439/how-do-i-check-if-an-input-contains-an-isbn-using-javascript
// Formula: https://gitlab.cs.usu.edu/erik.falor/sp21-cs1440-lecturenotes/-/blob/dddc88ed463893ab9c424c10c3f8fec226d94a10/Module0/SDP_example_project-ISBN-13/Instructions.md#:~:text=Computing%20the%20ISBN%2D13%20check%20digit,-The%20check%20digit&text=It%20is%20computed%20by%20summing,in%20the%20range%200%2D9%20.

const isValidIsbn13 = rawISBN => {
  const isbn = `${rawISBN}`.replace(/[^0-9X]/gi, '');

  if (isbn.length !== 13) return false;

  const sum = Array.from(Array(isbn.length)).reduce(
    (acc, _, index) => acc + parseInt(isbn[index]) * (index % 2 === 0 ? 1 : 3),
    0
  );

  return sum % 10 === 0;
};

export default isValidIsbn13;
