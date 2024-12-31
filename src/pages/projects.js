import React from "react";
import Header from "../components/Header";
import { GiLaptop } from "react-icons/gi";
import projectsdata from "./projectsdata";

function projects() {
  return (
    <div>
      <Header />
      <div className="container projects-intro">
        <div className="row flex with center mt-5">
          <div className="col-md-6 text-black">
            <div className="n-box2 px-3 py-5" data-aos="fade-down">
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                I’ve worked on projects that showcase my creativity and
                technical skills, like building responsive websites,
                user-friendly dashboards, and interactive client portals.
              </p>
              <button className="primary-button"><a href="#projects-list">Explore</a></button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D7BCFD"
                d="M48.7,-70.1C61.1,-58,67.9,-41.1,72.3,-24.3C76.8,-7.4,78.9,9.5,74.2,24.1C69.5,38.8,57.8,51.2,44.3,61.6C30.8,72,15.4,80.4,0,80.4C-15.4,80.4,-30.8,72,-45,61.8C-59.3,51.6,-72.5,39.7,-76.9,25.2C-81.3,10.7,-76.9,-6.4,-72,-23.9C-67.1,-41.4,-61.6,-59.3,-49.5,-71.5C-37.4,-83.8,-18.7,-90.3,-0.3,-89.9C18.1,-89.6,36.3,-82.2,48.7,-70.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <GiLaptop
              color="white"
              size="180"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>
      <div className="container projects-list" id="projects-list">
        <h4 className="font-bold text-black">Take a look at my projects</h4>
        <hr />
        <div className="row">
          {projectsdata.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr/>
                    <p>{project.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default projects;
