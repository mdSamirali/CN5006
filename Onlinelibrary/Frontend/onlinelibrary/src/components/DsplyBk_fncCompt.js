import React, { useEffect, useState } from "react";
import api from "../api";
import DisplayData from "./DisplayData";

export default function DsplyBk_fncCompt() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const fetchBooks = async () => {
    setLoading(true);
    setErrMsg("");
    try {
      const res = await api.get("/allbooks");
      setBooks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setErrMsg(err.response?.data?.error || err.message || "Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h3 className="card-title m-0">All Books</h3>
          <button className="btn btn-outline-secondary btn-sm" onClick={fetchBooks}>
            Refresh
          </button>
        </div>

        {loading && <div>Loading...</div>}
        {errMsg && <div className="alert alert-danger">{errMsg}</div>}
        {!loading && !errMsg && <DisplayData books={books} />}
      </div>
    </div>
  );
}
