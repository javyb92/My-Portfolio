import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Navbar />
        <Wrapper>
          <Sidebar />
            <Router>
              <Switch>
                    <Route exact path="/">
                      <Greeting />
                    </Route>
                    <Route exact path="/about">
                      <AboutMe />
                    </Route>
                    <Route exact path="/portfolio">
                      <Portfolio />
                    </Route>
                    <Route component={Greeting} />
              </Switch>
            </Router>
        </Wrapper>
    </div>
  );
}

export default App;
