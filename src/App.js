import React from 'react'
import './App.css';
import { Navigation } from './Navigation/Navigation.js';
import { Header } from './Home/Header/Header.js';
import { Body } from './Home/Body/Body.js';
import {BelowBody} from './Home/BelowBody/BelowBody.js';
import {About} from './About/About.js';
import {Footer} from './Footer/Footer.js';
import{Contact} from './Contact/Contact.js';
import {Loader} from './Loader/Loader.js'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App main_wrapper">
      <Navigation />

      <Routes>
          <Route path = "/" element = {<><Header/><Body/><BelowBody/></>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/contact" element = {<Contact />} />
      </Routes>

      


      <Footer/>
    </div>
    </Router>
  );
}

export default App;
