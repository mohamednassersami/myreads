import React, { useState } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

const SearchPage = ({ Shelfs, addNewBook, alreadyExistingBooks }) => {
  const [booksList, setBooksList] = useState([]);
  const handelBooksList = async (query) => {
    if (query.trim()) {
      const res = await BooksAPI.search(query);
      setBooksList(res);
    } else {
      setBooksList([]);
    }
  };
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
