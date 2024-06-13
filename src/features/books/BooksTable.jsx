import { Table } from '~/components';
import { BooksTableRow } from '.';

const books = [
  // {
  //   id: 1,
  //   name: 'The Clean Coder: A Code of Conduct for Professional Programmers',
  //   authors: ['Martin, Robert'],
  //   publicationYear: 2011,
  //   rating: 9,
  //   isbn: '978-0137081073',
  // },
  // {
  //   id: 2,
  //   name: '7 Habits Of Highly Effective People',
  //   authors: ['Covey, Stephen R.'],
  //   publicationYear: 2004,
  //   rating: 9,
  //   isbn: '978-1863500296',
  // },
  // {
  //   id: 3,
  //   name: 'The Color of Magic',
  //   authors: ['Pratchett, Terry'],
  //   publicationYear: 2013,
  //   rating: 8,
  //   isbn: '9780062225672',
  // },
  // {
  //   id: 4,
  //   name: 'Press Reset: Ruin and Recovery in the Video Game Industry',
  //   authors: ['Jason Schreier'],
  //   publicationYear: 2021,
  //   rating: 10,
  // },
  // {
  //   id: 5,
  //   name: 'The Inmates Are Running the Asylum',
  //   authors: ['Cooper, Alan'],
  //   publicationYear: 2004,
  //   rating: 8,
  //   isbn: '978-0672326141',
  // },
  {
    id: 6,
    name: 'The Three Musketeers',
    authors: ['Alexandre Dumas'],
  },
  {
    id: 7,
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: ['Robert C. Martin'],
    publicationYear: 2008,
    rating: 9,
    isbn: '978-0132350884',
  },
  {
    id: 8,
    name: 'George and the Big Bang',
    authors: ['Hawking, Stephen', 'Hawking, Lucy'],
    publicationYear: 2013,
    isbn: '978-1442440067',
  },
];

function BooksTable() {
  return (
    <Table columns="0.8fr 2.2fr 1.2fr 0.6fr 0.6fr 1.4fr 0.2fr">
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Authors</div>
        <div>Year</div>
        <div>Rating</div>
        <div>ISBN</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={books}
        render={book => <BooksTableRow book={book} key={book.id} />}
      />

      <Table.Footer>
        <div>Page Number</div>
        <div>Pagination</div>
      </Table.Footer>
    </Table>
  );
}

export default BooksTable;
