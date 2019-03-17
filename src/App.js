import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import DropDown from './components/DropDown';
import RadioList from './components/RadioList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <DropDown
          formLabel="Contact person:"
          dropList={[
            {
              name: 'Bob Nelson',
              title: 'General manager'
            },
            {
              name: 'Barbara Wolowitz',
              title: 'Shift manager'
            },
            {
              name: 'Audrey Diversidero',
              title: 'Night manager'
            },
            {
              name: 'Philip Dominick',
              title: 'Night shift manager'
            },
            {
              name: 'George Webster',
              title: 'Accountant'
            },
            {
              name: 'New contact',
              title: ''
            }
          ]}
        />
        <RadioList
          radioListItems={[
            {
              name: 'Show all',
              title: ''
            },
            {
              name: 'Bob Nelson',
              title: 'General manager'
            },
            {
              name: 'Barbara Wolowitz',
              title: 'Shift manager'
            },
            {
              name: 'Audrey Diversidero',
              title: 'Night manager'
            },
            {
              name: 'Philip Dominick',
              title: 'Night shift manager'
            },
            {
              name: 'George Webster',
              title: 'Accountant'
            },
            {
              name: 'New contact',
              title: ''
            }
          ]}
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
    width: 320px;
  }
`;

export default App;
