import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos="fade-up">NJABULO</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>
              UI/UX Designer <br /> Web Developer
            </p>
            <button className="primary-button font-bold"><a href="#carousel">Explore</a></button>
          </div>
        </div>
      </div>
      <Carousel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d7bcfd"
            fill-opacity="1"
            d="M0,192L40,208C80,224,160,256,240,229.3C320,203,400,117,480,101.3C560,85,640,139,720,176C800,213,880,235,960,240C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container text-black">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5" data-aos="fade-right">
              <h3>My passion for design runs deep</h3>
              <br />
              <p>
                I have a deep passion for creating visually stunning and
                intuitive designs that enhance user experiences. Design is not
                just a skill, but a way to bring ideas to life and make them
                accessible and beautiful.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="./uiux.svg" alt="" height="350" className="w-100" data-aos="fade-up" />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5" data-aos="fade-left">
              <p>
                I chose UI/UX design and web development because they blend
                creativity and problem-solving. I enjoy transforming abstract
                ideas into functional, user-friendly designs that enhance
                experiences. It allows me to explore both the artistic and
                technical aspects of building digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="devstack container mt-5 n-box2 px-5 py-5 text-black">
        <div className="text-center">
          <h3 className="font-bold text-center">My Development Stack</h3>
          <hr />
          <img src="./developer.svg" alt="" height="200" width="200" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="font-bold">
              <h3 className="font-bold">Frontend</h3>
              <hr />
              <p>Angular</p>
              <p>HTML/CSS</p>
              <p>Javacript</p>
              <p>ReactDOM</p>
              <p>Redux</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Material UI</p>
              <p>Bootstrap</p>
              <p>AntDesign</p>
              <p>Semantic UI</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3 className="font-bold"> Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>SQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
