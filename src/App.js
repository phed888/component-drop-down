import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import DropDown from './components/DropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <DropDown formLabel="Contact names" />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
`;

export default App;
