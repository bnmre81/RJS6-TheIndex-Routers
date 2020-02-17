import React, { Component } from "react";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };

  filterBookColor = bookColor => {
    const filteredBooks = this.state.filteredBooks.filter(
      book => book.color === bookColor
    );
    this.setState.filteredBooks = filteredBooks;
  };

  render() {
    const bookColor = this.props.books.color;

    if (bookColor) {
      this.filterBookColor(bookColor);
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar handleFilter={this.filterBooks} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default BookList;
