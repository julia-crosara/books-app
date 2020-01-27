import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //add array of books to the state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            moveShelf={this.moveShelf}
          /> 
        )} />
        <Route exact path="/search" render={() => (
          <SearchBooks
            moveShelf={this.moveShelf}
            books={this.props.books}
          /> 
        )} />

      </div>
    )
  }
}

export default BooksApp