import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='list-books-title'>
      <h1>MyReads</h1>

      <Link to='/searchBook' className='open-search'>
        <button>Add a book</button>
      </Link>
    </div>
  );
}

export default Header;
