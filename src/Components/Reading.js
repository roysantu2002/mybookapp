import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Reading extends Component {

    static propTypes = {
        currentlyReading: PropTypes.array.isRequired,
        onAdd: PropTypes.func.isRequired,
      }

    render() {
        const { currentlyReading, onAdd} = this.props

        return (
            
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {currentlyReading.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})`}}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">Harper Lee</div>
                    </div>
                  </li>
                  ))}
                </ol>
              </div>
            </div>
    )
    }
}

