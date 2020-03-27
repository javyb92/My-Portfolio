import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/aboutme";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
