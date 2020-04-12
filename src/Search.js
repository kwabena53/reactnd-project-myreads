import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCard from './BookCard'
// import PropTypes from 'prop-types' 
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component{

    state = {
        query: '',
        books: [],
        errorMessage:false
    }

    
    updateQuery = (query) =>{
        //updates state of the query
        this.setState(() => ({
            query : query
        }))

        //check to ensure query input is not undefined
        if(query){
            BooksAPI.search(query)
        .then(books=>{
            //if books are found
            books.length > 0 
            //update book list displaying
            ? this.setState(()=>({books : books, errorMessage: false}))
            //display nothing
            : this.setState(()=>({books : [], errorMessage: true}))
        })
        }
        else if(query ===""){
            this.setState(()=>({books : [], errorMessage: false}))
        }
        
    }

        
      
        render(){
            const {changeShelf, shelvedBooks} = this.props
            const {query, books, errorMessage} = this.state
    
            return(
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/' >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value = {query}
                            onChange = {(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {

                        books.map((book)=>(
                            <BookCard key={book.id} book={book} books={shelvedBooks} changeShelf = {changeShelf}></BookCard>
                        ))
                        
                        }
                        </ol>

                        {errorMessage && (
                            <h3>Books not found</h3>
                        )}
                    </div>
                </div>
            )
        }

        // static propTypes = {
        //     books: PropTypes.array.isRequired,
        // }

}

export default Search