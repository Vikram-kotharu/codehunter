import React from "react";

const index = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
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
                  <a className="nav-link" href="#">
                    Home
                  </a>
                  <a className="nav-link" href="#">
                    Blogs
                  </a>
                  <a className="nav-link" href="#">
                    About
                  </a>
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="row">
            <div className="col-lg-6 p-5">
              <h3>Bhog1</h3>
              <p>
                this blop is about djfb sk akjsda a kjas hk akjdah k akjshd ak
                haksjhdka kjashsdkj ha kjashd akj{" "}
              </p>
              <div className="d-flex flex-row">
                <button className="btn btn-primary">save</button>
                <button className="btn btn-success ms-2">share</button>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <h3>Bhog1</h3>
              <p>
                this blop is about djfb sk akjsda a kjas hk akjdah k akjshd ak
                haksjhdka kjashsdkj ha kjashd akj{" "}
              </p>
              <div className="d-flex flex-row">
                <button className="btn btn-primary">save</button>
                <button className="btn btn-success ms-2">share</button>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <h3>Bhog1</h3>
              <p>
                this blop is about djfb sk akjsda a kjas hk akjdah k akjshd ak
                haksjhdka kjashsdkj ha kjashd akj{" "}
              </p>
              <div className="d-flex flex-row">
                <button className="btn btn-primary">save</button>
                <button className="btn btn-success ms-2">share</button>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <h3>Bhog1</h3>
              <p>
                this blop is about djfb sk akjsda a kjas hk akjdah k akjshd ak
                haksjhdka kjashsdkj ha kjashd akj{" "}
              </p>
              <div className="d-flex flex-row">
                <button className="btn btn-primary">save</button>
                <button className="btn btn-success ms-2">share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
