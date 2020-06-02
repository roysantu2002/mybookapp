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
    //screen: 'list'
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => ({
        allBooks,
      }));
    });
  }

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

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='list-books-content'>
          {/* <Reading></Reading>
          <WantToRead /> */}

          <div className='list-books-content'>
            {/* <Reading></Reading>
          <WantToRead /> */}
            <Books
              header='currently reading'
              wantToRead={this.state.currentlyReading}
              onAdd={{}}
            />
          </div>

          <Books
            header='want to read'
            wantToRead={this.state.allBooks}
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
