import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddBook from "./components/AddBook";
import DisplayBook from "./components/DsplyBk_fncCompt";
import BookUpdate from "./components/BookUpdate";
import DeleteBook from "./components/Delete_Book";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Online Library
          </Link>

          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DisplayBooksF1">
                  Display All Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/DisplayBooksF1" element={<DisplayBook />} />
          <Route path="/edit/:id" element={<BookUpdate />} />
          <Route path="/Delete/:id" element={<DeleteBook />} />
        </Routes>

      </div>
    </Router>
  );
}
