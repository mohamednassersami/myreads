import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const Home = ({ books, Shelfs, editBookShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Shelfs.map((shelf, index) => (
            <Shelf
              key={index}
              title={shelf.name}
              value={shelf.value}
              Shelfs={Shelfs}
              books={books}
              editBookShelf={(book) => editBookShelf(book)}
            />
          ))}
        </div>
      </div>
      <Link to="/search" className="open-search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

Home.propTypes = {
  Shelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  editBookShelf: PropTypes.func.isRequired,
};

export default Home;
