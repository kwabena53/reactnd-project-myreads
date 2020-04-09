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
        books: []
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
            ? this.setState(()=>({books : books}))
            //display nothing
            : this.setState(()=>({books : []}))
          
        })
        }
        
    }

        
      
        render(){
            const {changeShelf, shelvedBooks} = this.props
            const {query, books} = this.state
    
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
                            {console.log(books)}
                        {

                        books.map((book)=>(
                            <BookCard key={book.id} book={book} books={shelvedBooks} changeShelf = {changeShelf}></BookCard>
                        ))
                        
                        }
                        </ol>

                    </div>
                </div>
            )
        }

        // static propTypes = {
        //     books: PropTypes.array.isRequired,
        // }

}

export default Search