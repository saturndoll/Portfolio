import React from "react";
import Header from "../components/Header"

function contact() {
  return (
    <div>
      <Header/>
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contact.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="contact-form m-2 p-5 n-box2 ">
              <h3 className="font-bold">Contact Me</h3>
              <hr/>
              <input type="text" className="form-control" placeholder="Name" />
              <input type="text" className="form-control" placeholder="Name" />
              <textarea className="form-control" />
              <button className="primary-button mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
