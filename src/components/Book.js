import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, handleRemoveBook }) => (
  <div className="Book-panel">
    <div className="book-description">
      <h4 className="category">{book.category}</h4>
      <h2 className="title">{book.title}</h2>
      <p className="author">Sune Persson</p>
      <div className="links">
        <p className="link Line-2">Comments</p>
        <button className="Line-2" type="submit" onClick={handleRemoveBook}>Remove</button>
        <p className="link">Edit</p>
      </div>
    </div>
    <div className="progress-bar">
      <div className="outer-circle">
        <div style={{ width: 68, height: 68 }} className="circle-bar">
          <CircularProgressbar
            value={book.id}
            styles={buildStyles({
              pathColor: '#0290ff',
            })}
          />
        </div>
      </div>
      <div>
        <h4>{`${book.id}%`}</h4>
        <p>Completed</p>
      </div>
    </div>
    <div className="chapter">
      <h4>CURRENT CHAPTER</h4>
      <p>
        Chapter 3:&nbsp;
        <q>A Lesson Learned</q>
      </p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
  // <tr key={book.id}>
  //   <td>{book.id}</td>
  //   <td>{book.title}</td>
  //   <td>{book.category}</td>
  //   <td><button type="submit" onClick={handleRemoveBook}>X</button></td>
  // </tr>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
