import React, { Component } from 'react';

import Header from './Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper">
        <Header title="DLZ Studios"/>
        <h1>Hello World!</h1>
      </div>
    );
  }
}


export default App;