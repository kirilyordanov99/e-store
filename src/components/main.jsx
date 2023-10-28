import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src ="./assets/main.jpg" 
            alt = ""
            height = {150}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Random text to see how the styling looks.This will be some longer text just to see some things, idk... Maybe even longer 
                just in case, you know? Or maybee a little bit longer! That size seem to do decent job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
