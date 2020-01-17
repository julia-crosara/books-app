import React, { Component } from 'react'
import ListBooks from './components/ListBooks.js'
import Book from './components/Book.js'
import SearchBooks from './components/SearchBooks.js'
import * as BooksAPI from './utils/BooksAPI.js'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <ListBooks />
      </div>
    )
  }
}

export default BooksApp