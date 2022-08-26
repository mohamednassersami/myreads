import React from "react";
import PropTypes from "prop-types";
import ChangeBookShelf from "./ChangeBookShelf";

const Book = ({
  book,
  imageURL,
  authors,
  bookTitle,
  Shelfs,
  editBookShelf,
  booksMatchShelf,
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
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          {/* <ChangeBookShelf
            book={book}
            Shelfs={Shelfs}
            editBookShelf={(book) => editBookShelf(book)}
            booksMatchShelf={booksMatchShelf}
          /> */}
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
