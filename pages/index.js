import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Nav from "@/components/nav";
const index = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-row justify-content-center">
              <Image
                className="col-lg-6 try"
                src="/code.jpg"
                alt="Picture of coding"
                width="250"
                height="250"
              />
            </div>

            <div className="col-lg-6 p-5">
              <h3>Blog</h3>
              <p>
                this blop is about djfb sk akjsda a kjas hk akjdah k akjshd ak
                haksjhdka kjashsdkj ha kjashd akj
              </p>
              <div className="d-flex flex-row">
                <button className="btn btn-primary ">save</button>
                <button className="btn btn-success ms-2">share</button>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <h3>Blog</h3>
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
              <h3>Blog</h3>
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
              <h3>Blog</h3>
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
