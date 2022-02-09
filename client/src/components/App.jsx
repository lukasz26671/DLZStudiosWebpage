import React, { Component, useEffect } from 'react';
import {BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';
import {isMobile} from 'react-device-detect';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import Projects from "./routes/Projects.jsx";

class App extends Component {

  

  componentDidMount() {
    document.title = "DLZ Studios";
    document.body.classList.toggle("mobile", isMobile);
    console.log(isMobile);
  }

  componentDidUpdate() {
    document.body.classList.toggle("mobile", isMobile);
    console.log(isMobile);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
          <Header />
          <div className="page-content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
          <Footer />
      </HashRouter>
    );
  }
}


export default App;