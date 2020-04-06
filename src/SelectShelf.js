import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import './App.css'



class SelectShelf extends Component {

    render(){
        const { book, onChangeSelf } = this.props
     
        return(
                <div className="book-shelf-changer">
                    <select value={book.shelf} >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
        )
    }
}

export default SelectShelf