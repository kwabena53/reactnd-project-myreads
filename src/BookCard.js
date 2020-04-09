import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import  SelectShelf from './SelectShelf'
import PropTypes from 'prop-types'


class BookCard extends React.Component {

    render(){
        const { book, books, changeShelf } = this.props
        //controls when there is not thumbnail
        const bookThumnail = book.imageLinks === undefined ? 
         'https://via.placeholder.com/128x188.png?text=Image+is+not+available'
         : book.imageLinks.thumbnail 
        //controls when there is no author
        const author = book.authors === undefined ? ''
        : book.authors.toString()
        return(
                    <li>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + (bookThumnail) + ')'}}></div>
                            <SelectShelf book = {book} books={books} changeShelf={changeShelf}></SelectShelf>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{author}</div>
                        </div>
                    </li>
        )
    }
    static propTypes = {
        book : PropTypes.object.isRequired,
        books : PropTypes.array.isRequired,
        changeShelf : PropTypes.func.isRequired,
      }
}

export default BookCard