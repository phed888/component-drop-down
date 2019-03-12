import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import DropDown from './components/DropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <DropDown
          formLabel="Contact names"
          dropList={['Bob', 'Ted', 'Carol', 'Alice', 'Zippy']}
        />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 20px auto 0;
    width: 640px;
  }
`;

export default App;
