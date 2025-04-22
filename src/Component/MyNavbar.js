import React from 'react';
import { SiYourtraveldottv } from "react-icons/si";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark  shadow-sm py-3">
      <div className="container">
        {/* Logo & Brand */}
        <a className="navbar-brand d-flex justify-content-center align-items-center gap-2" href="#home">
          <span className='text-warning me-1'><SiYourtraveldottv /></span>
          <span className="fw-bold text-white fs-5">Dot</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-lg-4 gap-2 text-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#popular">Popular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#offer">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#hiking">Hiking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#features">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
