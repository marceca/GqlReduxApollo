const AllBooks = 'AllBooks';
const SingleBook = 'SingleBooks';
const AddBook = 'AddBook'

const allBooks = (allBooks) => ({type: AllBooks, allBooks});
const singleBook = (currentBook) => ({type: SingleBook, currentBook});
const addBook = (newInfo) => ({type: AddBook, newInfo})

module.exports = {
  AllBooks,
  allBooks,
  SingleBook,
  singleBook,
  AddBook,
  addBook
}