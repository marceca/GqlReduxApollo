import * as types from '../constants/actions';
import React from 'react';

const initState = {
  onLoad: false,
  books: [],
  currentBook: {
    name: '',
    genre: '',
    author: {
      name: '',
      age: null,
      books: []
    }
  }
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case(types.AllBooks):
      const AllBooksState = Object.assign({}, state);
      if(AllBooksState.onLoad === false) {
        for(let i = 0; i < action.allBooks.length; i++) {
          AllBooksState.books.push(action.allBooks[i]);
        }
        AllBooksState.onLoad = true;        
      }
    return AllBooksState;

    case(types.SingleBook):
      const SingleBookState = Object.assign({}, state);
      SingleBookState.currentBook.name = action.currentBook.name;
      SingleBookState.currentBook.genre = action.currentBook.genre;
      SingleBookState.currentBook.author.name = action.currentBook.author.name;
      SingleBookState.currentBook.author.age = action.currentBook.author.age;
      for(let i = 0; i < action.currentBook.author.book.length; i++) {
        SingleBookState.currentBook.author.books.push(action.currentBook.author.book[i])
      }
    return SingleBookState;

    case(types.AddBook):
      const AddBookState = Object.assign({}, state);
      let newBook = {};
      newBook.name = action.newInfo.name;
      newBook.genre = action.newInfo.genre;
      // newBook.author
      console.log('inside addbook ',action);

    return AddBookState;
    default:
      return state;
  }
}

export default eventReducer;