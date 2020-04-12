import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookCard from './BookCard'
import Search from './Search'
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
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
      BooksAPI.update(changedBook, shelf).then(result => console.log(result))
  };

  render() {
    const {books} = this.state

    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }

    return (
      <div className="app">
        
         
        <Route exact path='/' render={()=>(
           <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
           </div>
           <div className="list-books-content">
             <div>
                 {
                   Object.entries(shelves).map(([key, value])=>(
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">{value[0]}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {
                          this.state.books.map((book)=>(
                            (book.shelf === value[1]) && (
                            <BookCard key={book.id} book={book} books = {books} changeShelf = {this.changeShelf}></BookCard>
                            )
                        ))
                      }
                      </ol>
                    </div>
                  </div>
                   ))
                 }               
             </div>
           </div>

           <div className="open-search">
             <Link className="button" to="/search">Add a book</Link>
           </div>
         </div>
        )}
        
        />
         
         <Route path='/search' render={() => (
           <Search
       
              changeShelf = {this.changeShelf}
              shelvedBooks = {books}
           />
        )}
        />
        
      </div>
    )
  }
}

export default BooksApp
