import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../App.css";
import CurrentlyReading from "./Reading";
import WantToRead from "./WantToRead";
import AddWishist from "./AddWishList";
import SearchBook from "./SearchBook";
import { Route } from "react-router-dom";
import Header from "./Header";
import Reading from "./Reading";

class BooksApp extends React.Component {
  state = {
    currentlyReading: [
        {
          id: 1,
          title: 'Richard Kalehoff',
          url: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
        },
        {
          id: 2,
          title: 'Santu Roy',
          url: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
        },
        {
          id: 3,
          title: 'Not found',
          url: ''
        }
    ],
    //screen: 'list'
  }

  // componentDidMount() {
  //   BooksAPI.getAll()
  //     .then((contacts) => {
  //       this.setState(() => ({
  //         contacts
  //       }))
  //     })
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

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='list-books-content'>
          <Reading 
          currentlyReading={this.state.currentlyReading}
          onAdd={{}} />
          <WantToRead />
          <AddWishist />
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
