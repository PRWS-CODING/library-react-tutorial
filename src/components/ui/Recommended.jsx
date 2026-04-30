import React from "react";
import Book from "./Book";

function Recommended({ books, id }) {
  return (
    <div className="books">
      {books &&
        books
          .filter((book) => book.rating === 5 && +book.id !== +id)
          .slice(0, 4)
          .map((book) => <Book book={book} key={book.id} />)}
    </div>
  );
}

export default Recommended;
