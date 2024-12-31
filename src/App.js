import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import home from "./pages/home";
import projects from "./pages/projects";
import contact from "./pages/contact";
import "./stylesheets/home.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/carousel.css";
import "./stylesheets/projects.css";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 500,
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={home} />
          <Route path="/projects" exact Component={projects} />
          <Route path="/contact" exact Component={contact} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
