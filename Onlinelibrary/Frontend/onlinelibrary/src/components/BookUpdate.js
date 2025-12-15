import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export default function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    booktitle: "",
    PubYear: "",
    author: "",
    Topic: "",
    formate: "",
  });

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const load = async () => {
      setErr("");
      try {
        const res = await api.get(`/getbook/${id}`);
        const b = res.data || {};
        setForm({
          booktitle: b.booktitle ?? "",
          PubYear: b.PubYear ?? "",
          author: b.author ?? "",
          Topic: b.Topic ?? "",
          formate: b.formate ?? "",
        });
      } catch (error) {
        setErr(error.response?.data?.error || error.message || "Failed to load book");
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    try {
      await api.post(`/updatebook/${id}`, form);
      setMsg("Book updated!");
      setTimeout(() => navigate("/DisplayBooksF1"), 500);
    } catch (error) {
      setErr(error.response?.data?.error || error.message || "Update failed");
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title">Edit Book</h3>

        {msg && <div className="alert alert-success">{msg}</div>}
        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="booktitle" value={form.booktitle} onChange={handleChange} placeholder="Title" required />
          <input className="form-control mb-2" name="PubYear" value={form.PubYear} onChange={handleChange} placeholder="Year" />
          <input className="form-control mb-2" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
          <input className="form-control mb-2" name="Topic" value={form.Topic} onChange={handleChange} placeholder="Topic" />
          <input className="form-control mb-3" name="formate" value={form.formate} onChange={handleChange} placeholder="Format" />

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
