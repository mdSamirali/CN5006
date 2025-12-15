import React, { useState } from "react";
import api from "../api";

export default function AddBook() {
  const [form, setForm] = useState({
    booktitle: "",
    PubYear: "",
    author: "",
    Topic: "",
    formate: "",
  });

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    try {
      await api.post("/addbooks", form);
      setMsg("Book added successfully!");
      setForm({ booktitle: "", PubYear: "", author: "", Topic: "", formate: "" });
    } catch (error) {
      setErr(error.response?.data?.error || error.message || "Failed to add book");
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title">Add Book</h3>

        {msg && <div className="alert alert-success">{msg}</div>}
        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="booktitle" value={form.booktitle} onChange={handleChange} placeholder="Title" required />
          <input className="form-control mb-2" name="PubYear" value={form.PubYear} onChange={handleChange} placeholder="Year" />
          <input className="form-control mb-2" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
          <input className="form-control mb-2" name="Topic" value={form.Topic} onChange={handleChange} placeholder="Topic" />
          <input className="form-control mb-3" name="formate" value={form.formate} onChange={handleChange} placeholder="Format" />

          <button className="btn btn-primary" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
