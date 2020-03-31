import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper"
import AboutMe from "./Pages/AboutMe";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Portfolio from "./Pages/Portfolio";
import Greeting from "./Pages/Greeting";
import "./Pages/style.css"



function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Wrapper>
          <Navbar />
            <Sidebar />
              <Route exact path="/" component={Greeting} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/portfolio" component={Portfolio} />
              {/* <Route path="*" component={Greeting} /> */}
        </Wrapper>
      </HashRouter>
    </div>
  );
}

export default App;
