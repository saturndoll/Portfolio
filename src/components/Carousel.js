import React from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

function Carousel() {
  return (
    <div>
      <div className="carousel-parent position-relative" id="carousel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="#61DAFB" />
            {/* <FaReact color="#61DAFB" className="reflection" /> */}
          </span>
          <span style={{ "--i": 2 }}>
            <FaAngular color="#DD0031" />
            {/* <FaAngular color="#DD0031" className="reflection" /> */}
          </span>
          <span style={{ "--i": 3 }}>
            <FaJsSquare color="#F7DF1E" />
            {/* <FaJsSquare color="#F7DF1E" className="reflection" /> */}
          </span>
          <span style={{ "--i": 4 }}>
            <FaHtml5 color="#E44D26" />
            {/* <FaHtml5 color="#E44D26" className="reflection" /> */}
          </span>
          <span style={{ "--i": 5 }}>
            <FaCss3 color="#1572B6" />
            {/* <FaCss3 color="#1572B6" className="reflection" /> */}
          </span>
          <span style={{ "--i": 6 }}>
            <FaFigma color="#A259FF" />
            {/* <FaFigma color="#A259FF" className="reflection" /> */}
          </span>
          <span style={{ "--i": 7 }}>
            <FaBootstrap color="#7952B3" />
            {/* <FaBootstrap color="#7952B3" className="reflection" /> */}
          </span>
          <span style={{ "--i": 8 }}>
            <FaNodeJs color="#68A063" />
            {/* <FaNodeJs color="#68A063" className="reflection" /> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
