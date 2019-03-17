import React, { Component } from 'react';
import styled from 'styled-components';
import Orion from './Orion';

class RadioListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // checked: false
  //     selectedOption: ''
  //   };
  // }

  render() {
    return (
      <RadioItemContainer
        key={this.props.itemName}
        // onClick={this.props.onClick}
      >
        <label className="radioListLabel" htmlFor={this.props.itemName}>
          <span className="radioListName">
            <input
              type="radio"
              id={this.props.itemName}
              name="NameList"
              checked={this.props.selectedOption === this.props.itemName}
              onChange={this.props.onClick}
            />
            {this.props.itemName}
          </span>
          <span className="radioListTitle">{this.props.itemTitle}</span>
        </label>
      </RadioItemContainer>
    );
  }
}

const RadioItemContainer = styled.li`
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
`;

export default RadioListItem;
