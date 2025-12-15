import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export default function Delete_Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        await api.post(`/deleteBook/${id}`);
        navigate("/DisplayBooksF1");
      } catch (error) {
        setErr(error.response?.data?.error || error.message || "Delete failed");
      }
    };
    run();
  }, [id, navigate]);

  return (
    <div className="container mt-4">
      <h3>Deleting book...</h3>
      {err && <div className="alert alert-danger mt-3">{err}</div>}
    </div>
  );
}
