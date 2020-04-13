import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ContactForm from "./Pages/ContactMe/ContactForm";
import Footer from "./components/Footer/footer";
import Greeting from "./Pages/Greeting/Greeting";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Sidebar2 from "./components/sidebar2/sidebar2"
import "./Pages/style.css"



function App() {
  return (
      <HashRouter basename='/'>
        <Sidebar2/>
        <Greeting/>
        <AboutMe/>
        <Portfolio/>
        <ContactForm/>
        <Footer/>
      </HashRouter>
  );
}

export default App;
