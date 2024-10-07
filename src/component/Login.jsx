import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");

    if (storedEmail === email && storedPassword === password) {
      alert("Login successful!");
      window.location.href = "/"; // Use window.location.href for redirection
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form
        className="needs-validation shadow p-4 rounded bg-light"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
        <div className="text-center mt-3">
          <Link to="/signup" className="text-decoration-none">
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
