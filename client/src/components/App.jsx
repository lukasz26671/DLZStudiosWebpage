import React, { Component } from 'react';
import {BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';


class App extends Component {

  componentDidMount() {
    document.title = "DLZ Studios";
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
            </Switch>
          </div>
          <Footer />
      </HashRouter>
    );
  }
}


export default App;