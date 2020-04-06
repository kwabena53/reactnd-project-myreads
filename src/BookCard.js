import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import  SelectShelf from './SelectShelf'


class BookCard extends React.Component {

    render(){
        const { book, changeShelf } = this.props
        return(
                    <li>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + (book.imageLinks.thumbnail) + ')'}}></div>
                            <SelectShelf book = {book} changeShelf={changeShelf}></SelectShelf>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{(book.authors).toString()}</div>
                        </div>
                    </li>
        )
    }
}

export default BookCard