import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchInput = ({ searchValue }) => {
  const [bookTitle, setBookTitle] = useState("");

  const inputHandler = (event) => {
    setBookTitle(event.target.value);
  };
  useEffect((prevState) => {
    if ( bookTitle) {
      searchValue(bookTitle);
    }
  });

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => inputHandler(e)}
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.func.isRequired,
};

export default SearchInput;
