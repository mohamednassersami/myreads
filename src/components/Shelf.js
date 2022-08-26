import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ title, value, Shelfs, books, editBookShelf }) => {
  const booksMatchShelf = (shelf) => {
    const Books = books.filter((book) => {
      return book.shelf === shelf;
    });
    return Books;
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksMatchShelf(value).map((book, index) => (
            <Book
              books={books}
              booksMatchShelf={booksMatchShelf(value)}
              key={index}
              book={book}
              imageURL={book.imageLinks.thumbnail}
              authors={book.authors}
              bookTitle={book.title}
              Shelfs={Shelfs}
              editBookShelf={(book) => editBookShelf(book)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  Shelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  editBookShelf: PropTypes.func.isRequired,
};

export default Shelf;
