import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Orion from './Orion';
// import RadioListItem from './RadioListItem';

export default class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Show all'
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  // hideUnSelected = e => {
  //   console.log('hidden');
  // };

  // showAll = () => {
  //   console.log('shown');
  // };

  // testInterval = null;

  // handleFilter = e => {
  //   const newFilter = e.target.id;
  //   console.log(newFilter);
  //   const tempState = [...this.state.radioListItems];
  //   const newList = tempState.filter(listItem =>
  //     listItem.name.includes(newFilter)
  //   );
  //   this.setState({ selectedOption: newFilter });
  //   this.testInterval = setInterval(this.showSelectedOption, 1000);
  // };

  // showSelectedOption = () => {
  //   clearInterval(this.testInterval);
  //   console.log(this.state.selectedOption);
  // };

  // onChangeAction = e => {};
  handleOptionChange = e => {
    console.log(e);
  };

  listItems = this.props.radioListItems.map(listItem => (
    // <RadioListItem
    //   itemName={listItem.name}
    //   itemTitle={listItem.title}
    //   onClick={this.handleFilter}
    //   selectedOption={this.state.selectedOption}
    // />
    <li>
      <label htmlFor="radioTest">
        <input
          type="radio"
          name="test"
          id={listItem.name}
          checked={this.state.selectedOption === listItem.name}
          onChange={this.handleOptionChange}
        />
      </label>
    </li>
  ));

  render() {
    return (
      <ThemeProvider theme={Orion}>
        <RadioContainer>
          <div className="radioList-container">
            <ul className="radioList">{this.listItems}</ul>
          </div>
        </RadioContainer>
      </ThemeProvider>
    );
  }
}

const RadioContainer = styled.div`
  position: relative;
  .radioList-container {
    box-sizing: border-box;
    padding: 0.8rem;
    background-color: #ffffff;
    border: 0.1rem solid ${Orion.gray500};
    border-radius: 0.2rem;
    width: 100%;
    margin-top: 24px;
  }
  .radioList {
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 1.4rem;
    color: ${Orion.gray500};
    margin: 0;
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    input {
      margin-right: 0.8rem;
    }
    &:hover {
      background-color: ${Orion.teal200};
      color: ${Orion.indigo500};
    }
    &:first-child {
      border-bottom: 1px solid rgba(0, 0, 30, 0.2);
      margin-bottom: 0.4rem;
      padding-bottom: 1.2rem;
    }
    &:last-child {
      border-top: 1px solid rgba(0, 0, 30, 0.2);
      margin-top: 0.4rem;
      padding-top: 1.2rem;
    }
    .radioListLabel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .radioListTitle {
      padding-right: 4px;
    }
  }
`;
