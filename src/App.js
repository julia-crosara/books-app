import React from 'react'
import ListBooks from './components/ListBooks.js'
import * as BooksAPI from './utils/BooksAPI.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState(() => ({books}))
      })
  }

  render() {
    return (
      <div className="app">
        <ListBooks 
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp