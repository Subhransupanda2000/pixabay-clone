import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    alert("Credentials saved in session storage!");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create an Account</h2>
      <form
        className="needs-validation shadow p-4 rounded bg-light"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="signupEmail" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="signupEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="signupPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="signupConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}
