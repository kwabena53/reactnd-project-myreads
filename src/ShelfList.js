import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookCard'



class ShelfList extends React{

    render(){
        const { books, shelfTitle } = this.props
        
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookCard books={books}></BookCard>
                    </ol>
                </div>
            </div>
        )
    }
}