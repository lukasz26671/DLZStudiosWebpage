import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
class App extends Component {

  componentDidMount() {
    document.title = "DLZ Studios";
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          haha
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;