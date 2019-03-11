import React, { Component } from "react";
import styled from "styled-components";
import CarrotDown from "./CarrotDown";

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.formContainer = React.createRef();
    this.state = {
      isActive: false,
      selectedItem: ""
    };
  }

  clickInput = e => {
    let clickState = !this.state.isActive;
    console.log(clickState);
    this.setState({ isActive: clickState });
    console.log(this.state.isActive);
  };

  listItems = this.props.dropList.map((listItem, key) => (
    <li key={listItem.id} className="flyOut__item">
      {listItem}
    </li>
  ));

  render() {
    return (
      <DropDownContainer>
        <div
          ref={this.formContainer}
          className={`formElement ${this.state.isActive ? "in-focus" : ""}`}
          onClick={this.clickInput}
          title={this.state.selectedItem}
        >
          <CarrotDown />
          <label className="formElement__label">{this.props.formLabel}</label>
          <input
            type={this.props.inputType}
            ref={this.childInput}
            className="formElement__input"
            onFocus={this.focusInput}
            value={this.state.selectedItem}
          />
        </div>
        <div className="formElement__flyOut-container">
          <ul className="formElement__flyOut">{this.listItems}</ul>
        </div>
      </DropDownContainer>
    );
  }
}

const DropDownContainer = styled.div`
  position: relative;
  .formElement {
    box-sizing: border-box;

    padding: 0.8rem;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 0.2rem;
    height: 4.8rem;
    width: 100%;
    cursor: pointer;
    &.in-focus,
    &.in-focus:hover {
      background-color: $white-1000;
      border: 0.2rem solid $indigo-500;
      box-shadow: 0px 0px 0px 2px $indigo-200;
      .formElement__label {
        transform: scale(0.85714) translateY(-0.3rem);
        width: 100%;
        color: #999999;
      }
      .formElement__input {
        color: #222222;
      }
      + .formElement__flyOut-container {
        pointer-events: auto;
        right: -4px;
        left: -4px;
        padding: 0 4px 4px;
      }
      + .formElement__flyOut-container .formElement__flyOut {
        transform: translateY(0);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
      }
      svg {
        top: 1.1rem;
        right: 0.7rem;
        transform-origin: center;
        transform: rotate(180deg);
      }
    }
    &.is-dirty {
      box-shadow: none;
      .formElement__label {
        transform: scale(0.85714) translateY(-0.3rem);
        width: 100%;
        color: $indigo-500;
      }
    }
    &.in-error {
      background-color: $red-200;
      border: 0.2rem solid $red-500;
      .formElement__label {
        color: $red-500;
      }
    }
    &.is-disabled {
      border-color: $gray-300;
      .formElement__label {
        color: $gray-400;
      }
    }
    &:hover {
      background-color: $indigo-100;
      border-color: $indigo-500;
    }
    &__label {
      position: absolute;
      display: flex;
      font-size: 1.4rem;
      align-content: center;
      justify-content: space-between;
      width: calc(100% - 16px);
      transform-origin: top left;
      transform: scale(1) translateY(0.5rem);
      transition: transform 0.3s ease;
      pointer-events: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__input {
      border: none;
      background-color: transparent;
      font-size: 1.2rem;
      color: $indigo-800;
      transform: translateY(1.2rem);
      pointer-events: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    &__flyOut-container {
      position: absolute;
      right: 0;
      left: 0;
      margin: 0;
      z-index: 1000;
      overflow: hidden;
      pointer-events: none;
    }
    &__flyOut {
      transform: translateY(-100%);
      background-color: $white-1000;
      border: 1px solid $gray-500;
      margin: 0;
      transition: transform 0.3s ease;
      list-style: none;
      padding: 0.8rem 0;
    }
    svg {
      position: absolute;
      right: 0.8rem;
      top: 1.2rem;
      transition: transform 0.3s ease;
    }
  }
  .dropDownContainer {
    position: relative;
  }
  .flyOut__item {
    font-size: 1.4rem;
    height: 2.8rem;
    color: $gray-500;
    margin: 0;
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: $gray-200;
      color: $indigo-500;
    }
  }
`;
