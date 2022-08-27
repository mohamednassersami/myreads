import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";
import debounce from "lodash.debounce";

const SearchPage = ({ Shelfs, addNewBook, alreadyExistingBooks }) => {
  const [booksList, setBooksList] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handelBooksList = useCallback(
    debounce((query) => {
      if (query.trim()) {
        console.log("====>", query);
        BooksAPI.search(query)
          .then((books) => {
            setBooksList(books);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("====>", query);
        setBooksList([]);
      }
    }, 500)
  )

  return (
    <div className="search-books">
      <SearchInput searchValue={(q) => handelBooksList(q)} />
      <SearchList
        Shelfs={Shelfs}
        editBookShelf={(book) => addNewBook(book)}
        searchResult={booksList}
        alreadyExistingBooks={alreadyExistingBooks}
      />
    </div>
  );
};

SearchPage.propTypes = {
  Shelfs: PropTypes.array.isRequired,
  addNewBook: PropTypes.func.isRequired,
  alreadyExistingBooks: PropTypes.array.isRequired,
};

export default SearchPage;
