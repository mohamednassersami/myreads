import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ChangeBookShelf = ({ book, Shelfs, editBookShelf, booksMatchShelf }) => {
  const [shelf, setShelf] = useState(null);

  const bookShelfHandler = (event) => {
    const bookShelf = event.target.value;
    setShelf(bookShelf);
  };

  useEffect(() => {
    if (checkBookInShelfAlready()[0]) {
      setShelf(checkBookInShelfAlready()[0].shelf);
    } else {
      setShelf(book.shelf);
    }
  }, []);

  const checkBookInShelfAlready = () => {
    const existInShelf = booksMatchShelf.filter((booksMatchShelf) => {
      return booksMatchShelf.id === book.id;
    });
    return existInShelf;
  };

  useEffect((prevState) => {
    book.shelf = shelf;
    if (prevState.bookShelf !== null && prevState.bookShelf !== book.shelf) {
      editBookShelf(book);
    }
  }, []);

  return (
    <div className="book-shelf-changer">
      <select value={shelf ? shelf : "none"} onChange={bookShelfHandler}>
        <option value="move" disabled>
          Move to...
        </option>
        {Shelfs.map((Shelf, index) => (
          <option key={index} value={Shelf.value}>
            {Shelf.name}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

ChangeBookShelf.propTypes = {
  book: PropTypes.object.isRequired,
  Shelfs: PropTypes.array.isRequired,
  editBookShelf: PropTypes.func.isRequired,
  booksMatchShelf: PropTypes.array
};

export default ChangeBookShelf;
