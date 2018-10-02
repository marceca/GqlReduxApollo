import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

//Redux
import store from '../store';
import * as types from './constants/actions';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if(book) {
      // console.log(book)
      if(store.onLoad === false) {        
        store.dispatch(types.singleBook(book))
      }
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by {book.author.name}</p>
          <ul className="other-books">
            {
              book.author.book.map(book => {
                return <li key={book.id}>{book.name}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return <div>No Book Selected...</div>
    }
  }
  render() {
    return(
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);