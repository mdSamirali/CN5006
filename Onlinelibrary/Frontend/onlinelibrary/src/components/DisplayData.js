import React from "react";
import { Link } from "react-router-dom";

export default function DsplyBk_fncCompt({ books }) {
  if (!books?.length) {
    return <div className="alert alert-warning">No books found.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Author</th>
            <th>Topic</th>
            <th>Format</th>
            <th style={{ width: 170 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.booktitle}</td>
              <td>{b.PubYear ?? ""}</td>
              <td>{b.author ?? ""}</td>
              <td>{b.Topic ?? ""}</td>
              <td>{b.formate ?? ""}</td>
              <td>
                <Link className="btn btn-sm btn-warning me-2" to={`/edit/${b._id}`}>
                  Edit
                </Link>
                <Link className="btn btn-sm btn-danger" to={`/Delete/${b._id}`}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
