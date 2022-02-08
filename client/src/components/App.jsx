import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
      <Router>
        <div className="wrapper">
          <Header />
          <div className="content">
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
        </div>
      </Router>
    );
  }
}


export default App;