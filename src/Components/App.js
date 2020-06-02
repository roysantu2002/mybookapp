import React from "react";
import * as BooksAPI from "../Utils/BooksAPI";
import "../App.css";
import CurrentlyReading from "./Books";
import { Route } from "react-router-dom";
import Header from "./Header";
import Books from "./Books";
import SearchBook from "./SearchBook";
// import Reading from "./Reading";

class BooksApp extends React.Component {
  state = {

    allBooks: [],
    reading:[],
    wantToRead:[],
    currentlyReading: [
      {
        id: 1,
        title: "Richard Kalehoff",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        },
      },
    ],
    read:[],
    readtest:[]
    //screen: 'list'
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => ({
        allBooks,
      }));

      const reading = this.state.allBooks.filter(book => book.shelf.includes('currently'))
      this.setState({ reading });

      const read = this.state.allBooks.filter(book => book.shelf === 'read')
      this.setState({ read });

      const wantToRead = this.state.allBooks.filter(book => book.shelf.includes('want'))
      this.setState({ wantToRead });
    });
  }

  // BooksList () {
  //   const [books, updateBooks] = React.useState([]);
    
 
  //       const read = this.state.allBooks.filter(book => book.shelf === 'read')
  //       updateBooks([...books, { name: read}]);
  
  // }

  // const showingContacts = query === ''
  // ? contacts
  // : contacts.filter((c) => (
  //     c.shelf.toLowerCase().includes('query.toLowerCase()')
  //   ))
  // const currentlyReading = () => {
  //   this.setState((currentState) => ({
  //     read: currentState.contacts.filter((c) => (
  //       c.readingModes.shelf.toLowerCase().includes('currentlyReading')
  //     ))
  //   }))
  // }
 
  // checkShelf(shelf) {
  //   return shelf >= 18;
  // }
  // onAdd = (contact) => {
  //   ContactsAPI.create(contact)
  //     .then((contact) => {
  //       this.setState((currentState) => ({
  //         contacts: currentState.contacts.concat([contact])
  //       }))
  //     })
  // }

  onSearchBook = (books) => {
    // ContactsAPI.create(contact)
    //   .then((contact) => {
    //     this.setState((currentState) => ({
    //       contacts: currentState.contacts.concat([contact])
    //     }))
    //   })
  };

  // readBook(e) {
  //   const read = this.state.allBooks.filter(book => book.shelf === 'read')
  //   console.log(read);
  //   if(read) {
  //     this.setState({
  //       read: [ ...this.state.read, read],
  //     }, () => {
  //       console.log(this.state.read);
  //     });
  //   }
  // }




  render() {

    // const read = this.state.allBooks.filter(book => book.shelf === 'read') 
    // this.setState({
    //   read: [ ...this.state.read, {
    //     read
    //   }],
    // });

    // const showingContacts = this.state.allBooks.filter((c) => (
    //   c.readingModes.shelf.toLowerCase().includes('currentlyReading')
    //   ))

    
    // const setCurrentlyReading = () => {
    //   this.setState({ read: read });
    // };

    //this.state.read = this.state.allBooks.filter(book => book.shelf === 'read') 

    //this.state.read = this.state.allBooks.filter(book => book.shelf === 'read')

    
    //this.setState.readtest = readtest

  
    return (

      <div className='app'>

        console.log(BooksList)
         {/* {console.log(this.state.allBooks)} */}
        <Header />
        <div className='list-books-content'>
          

          <div className='list-books-content'>

          </div>
          <Books
            header='currently reading'
            wantToRead={this.state.reading}
            onAdd={{}}
          />

          <Books
            header='want to read'
            wantToRead={this.state.wantToRead}
            onAdd={{}}
          />
           <Books
            header='read'
            wantToRead={this.state.read}
            onAdd={{}}
          />
        </div>

        <Route
          path='/searchbook'
          render={({ history }) => (
            <SearchBook
              onSearchBook={(books) => {
                this.onSearchBook(books);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
