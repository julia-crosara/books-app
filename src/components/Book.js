import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
      book: PropTypes.object.isRequired,
      moveShelf: PropTypes.func.isRequired
  } 
  
  render() {
    let coverImage = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail :
    '';

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, 
            backgroundImage: `url("${coverImage}")`}}>
          </div>
          <div className="book-shelf-changer">
          <select 
            onChange={(event) => this.props.moveShelf(
              this.props.book, event.target.value
            )}> 
              <option value="move" selected disabled="true">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book