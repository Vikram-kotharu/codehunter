import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            Coding Blogs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/blog">
                Blogs
              </Link>
              <Link className="nav-link" href="/about">
                About
              </Link>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
