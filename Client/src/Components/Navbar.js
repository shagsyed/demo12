import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <div className="wrapper px-2 py-2">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bolder">
            Panel Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Candidate
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="profile">
                <i className="bi bi-person"></i>
              </div>
              <div className="profile-text">
                Micheal Doe
                <span>Panel_Aes</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
