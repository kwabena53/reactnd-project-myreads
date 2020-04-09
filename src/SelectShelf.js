import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'



class SelectShelf extends Component {
    

    render(){
        const { book, books, changeShelf } = this.props

        //if item is not in shelf then the current shelf is 'none'
        let curShelf = 'none'

        //iterate through the books in my shelf
        for(let item of books){
            //check if item is already in shelf
            if(item.id === book.id){
                //if present, then set current shelf to it's shelf
                curShelf = item.shelf
            } 
        }

        
     
        return(
                <div className="book-shelf-changer" >
                    <select value={curShelf} onChange={(event)=>{changeShelf(book, event.target.value)}}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
        )
    }
    static propTypes = {
        book : PropTypes.object.isRequired,
      }
}

export default SelectShelf