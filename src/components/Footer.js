import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d7bcfd"
            fill-opacity="1"
            d="M0,64L34.3,58.7C68.6,53,137,43,206,58.7C274.3,75,343,117,411,149.3C480,181,549,203,617,192C685.7,181,754,139,823,117.3C891.4,96,960,96,1029,106.7C1097.1,117,1166,139,1234,149.3C1302.9,160,1371,160,1406,160L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div className="div">
              <p>Designed and Developed by</p>
              <hr />
              <div className="d-flex justify-content-between px-6">
                <FaMailBulk className="footer-icons" />
                <FaGithub className="footer-icons" />
                <FaLinkedin className="footer-icons" />
              </div>
              <hr />
              <br />
              <p>Njabulo Tshabalala</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
