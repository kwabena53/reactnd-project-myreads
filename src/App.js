import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookCard from './BookCard'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
    }

    componentDidMount(){
      BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=>({
          books
        }))
      })
    }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        
         
        <Route exact path='/' render={()=>(
           <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
             <div>
             
                 {/* Currently Reading */}
                 <div className="bookshelf">
                 <h2 className="bookshelf-title">Currently Reading</h2>
                 <div className="bookshelf-books">
                   <ol className="books-grid">
                   {
                       this.state.books.map((book)=>(
                         (book.shelf === "currentlyReading") && (
                         <BookCard key={book.id} book={book} changeShelf = {this.changeShelf}></BookCard>
                         )
                     ))
                   }
                   </ol>
                 </div>
               </div>
                   {/* Want to Read  */}
                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.state.books.map((book)=>(
                          (book.shelf === "wantToRead") && (
                          <BookCard key={book.id} book={book} onChangeSelf = {this.changeShelf} ></BookCard>
                          )
                      ))
                    }
                    </ol>
                  </div>
                </div>
                    {/* Read */}
                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.state.books.map((book)=>(
                          (book.shelf === "read") && (
                          <BookCard key={book.id} book={book} onChangeSelf = {this.changeShelf}></BookCard>
                          )
                      ))
                    }
                    </ol>
                  </div>
                </div>   
               
             </div>
           </div>

           <div className="open-search">
             <Link className="button" to="/search">Add a book</Link>
           </div>
         </div>
        )}
        
        />
         
         <Route path='/search' render={() => (
           <div className="search-books">
           <div className="search-books-bar">
             <Link className="close-search" to='/' >Close</Link>
             <div className="search-books-input-wrapper">
             
               <input type="text" placeholder="Search by title or author"/>
             
             </div>
           </div>
           <div className="search-books-results">
             <ol className="books-grid">
               {

               this.state.books.map((book)=>(
                <BookCard key={book.id} book={book} onChangeSelf = {this.changeShelf}></BookCard>
               ))
              
              }
             </ol>

           </div>
         </div>
        )}
        />
        
      </div>
    )
  }
}

export default BooksApp
