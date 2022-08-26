import React from "react";
import PropTypes from "prop-types";
import ChangeBookShelf from "./ChangeBookShelf";

const Book = ({
  books,
  book,
  imageURL,
  authors,
  bookTitle,
  Shelfs,
  editBookShelf,
  alreadyExistingBooks,
}) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageURL})`,
            }}
          ></div>
          <ChangeBookShelf
            books={books}
            book={book}
            Shelfs={Shelfs}
            editBookShelf={(book) => editBookShelf(book)}
            booksMatchShelf={alreadyExistingBooks}
          />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{authors && authors.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  imageURL: PropTypes.string,
  authors: PropTypes.array,
  bookTitle: PropTypes.string,
  Shelfs: PropTypes.array.isRequired,
  booksMatchShelf: PropTypes.array,
};

export default Book;
