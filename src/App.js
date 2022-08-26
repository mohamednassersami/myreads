import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };
    getBooks();
  }, []);

  const Shelfs = [
    {
      name: "Currently Reading",
      value: "currentlyReading",
    },
    {
      name: "Want to Read",
      value: "wantToRead",
    },
    {
      name: "Read",
      value: "read",
    },
  ];

  const bookShelfHandler = (book) => {
    const booksStateWithoutEditedOne = books.filter((edited) => {
      return edited.id !== book.id;
    });
    BooksAPI.update(book, book.shelf)
      .then(() => {
        setBooks(booksStateWithoutEditedOne.concat(book));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              books={books}
              Shelfs={Shelfs}
              editBookShelf={bookShelfHandler}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              Shelfs={Shelfs}
              addNewBook={bookShelfHandler}
              alreadyExistingBooks={books}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
