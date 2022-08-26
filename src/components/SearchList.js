import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchList = ({
  Shelfs,
  editBookShelf,
  searchResult,
  alreadyExistingBooks,
}) => {
  const [searchListtBooks, setSearchListtBooks] = useState([]);

  useEffect(() => {
    if ( searchResult) {
      if (searchResult.length) {
        setSearchListtBooks(searchResult);
      } else {
        setSearchListtBooks([]);
      }
    }
  },[searchResult]);

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchListtBooks.map((book) => {
          if (book.imageLinks) {
            return (
              <React.Fragment key={book.id}>
                <Book
                  book={book}
                  id={book.id}
                  imageURL={book.imageLinks.thumbnail}
                  authors={book.authors}
                  bookTitle={book.title}
                  Shelfs={Shelfs}
                  editBookShelf={(book) => editBookShelf(book)}
                  alreadyExistingBooks={alreadyExistingBooks}
                />
              </React.Fragment>
            );
          } else {
            return false;
          }
        })}
      </ol>
    </div>
  );
};

SearchList.propTypes = {
  Shelfs: PropTypes.array.isRequired,
  editBookShelf: PropTypes.func.isRequired,
  searchResult: PropTypes.array,
};

export default SearchList;
