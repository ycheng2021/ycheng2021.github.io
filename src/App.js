import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SingleProject from "./pages/SingleProject";

function App() {
  const projects = [
    { name: "home-improvement" },
    { name: "el-caro-modelo" },
    { name: "the-grand-line-anime" },
    { name: "ultimate-tech-blog" },
    { name: "weather-dashboard" },
    { name: "code-quiz" },
  ];

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        {projects.map((project) => (
          <Route
            key={project.name}
            exact path={`/portfolio/:${project.name}`}
            element={<SingleProject />}
          />
        ))}
        <Route path="*" element={<h1>Wrong Page!!</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
