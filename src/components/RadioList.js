import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Orion from "./Orion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import RadioListItem from "./RadioListItem";

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Show all",
      radioListItems: []
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.setState({ radioListItems: this.props.radioListItems });
  }

  handleOptionChange = newSelection => {
    console.log("inside handleOptionChange");
    this.setState({ selectedOption: newSelection });
    this.hideUnselected(newSelection);
  };

  hideUnselected = newSelection => {
    if (newSelection === "Show all") {
      this.showAll();
    } else {
      let tempState = [...this.state.radioListItems];
      let showAll = tempState.filter(listItem =>
        listItem.name.includes("Show all")
      );
      let selectedName = tempState.filter(listItem =>
        listItem.name.includes(newSelection)
      );
      let newList = showAll.concat(selectedName);
      this.setState({ radioListItems: newList });
    }
  };

  showAll = () => {
    this.setState({ radioListItems: this.props.radioListItems });
  };

  render() {
    let listItems = this.state.radioListItems.map(listItem => (
      <CSSTransition key={listItem.name} timeout={300} classNames="fade">
        <RadioListItem
          itemName={listItem.name}
          itemTitle={listItem.title}
          handleOptionChange={this.handleOptionChange}
          selectedOption={this.state.selectedOption}
        />
      </CSSTransition>
    ));

    return (
      <ThemeProvider theme={Orion}>
        <RadioContainer>
          <div className="radioList-container">
            <ul className="radioList">
              <TransitionGroup className="radioList">
                {listItems}
              </TransitionGroup>
            </ul>
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
    /* border: 0.1rem solid ${Orion.gray500}; */
    border-radius: 0.2rem;
    width: 100%;
    margin-top: 24px;
    overflow-x: hidden;
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
    /* &:last-child {
      border-top: 1px solid rgba(0, 0, 30, 0.2);
      margin-top: 0.4rem;
      padding-top: 1.2rem;
    } */
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
  .fade-enter {
    opacity: 0;
    transform: scaleY(0);
  }
  .fade-enter.fade-enter-active {
    animation: fade-enter-timing 1000ms;
  }
  .fade-exit {
    opacity: 1;
    transform: scaleY(1);
  }
  .fade-exit.fade-exit-active {
    animation: fade-leave-timing 1000ms;
  }
  @keyframes fade-enter-timing {
    0% {
      opacity: 0;
      transform: scaleY(0);
      transform: translateX(30%);
    }
    50% {
      opacity: 1;
      transform: scaleY(1);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
      transform: translateX(0);
    }
  }
  @keyframes fade-leave-timing {
    0% {
      opacity: 1;
      transform: scaleY(1);
      transform: translateX(0);
    }
    50% {
      opacity: 0;
      transform: scaleY(1);
      transform: translateX(15%)
    }
    100% {
      opacity: 0;
      transform: scaleY(0.01);
      transform: translateX(30%);
    }
  }
`;

export default RadioList;
