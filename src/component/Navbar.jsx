import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  let loginbtn = () => {
    navigate("/login");
  };
  let signupbtn = () => {
    navigate("/signup");
  };
  return (
    <div id="div1">
      <nav className="container">
        <ul>
          <li id="li1">Pixabay</li>
          <li id="li4">
            <input
              type="text"
              placeholder="  Search for all images here"
              id="inputbox"
            />
          </li>
          <li id="li2">
            <button id="loginbtn" onClick={signupbtn}>
              signup
            </button>
          </li>
          <li id="li3">
            <button id="loginbtn" onClick={loginbtn}>
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
