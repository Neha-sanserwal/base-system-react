import React, { Component } from "react";

const convertToBase = (numToConvert, baseToConvert, currentBase) => {
  let remainders = [];
  let newNum = 0;
  while (numToConvert > 0) {
    remainders.push(numToConvert % baseToConvert);
    numToConvert = parseInt(numToConvert / baseToConvert);
  }
  remainders.forEach(
    (remainder, idx) => (newNum += remainder * Math.pow(currentBase, idx))
  );
  return newNum;
};
class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, base) {
    const { onChange, inputValidation } = this.props;
    const value = +event.target.value;
    if (inputValidation.test(value)) {
      const base10Val = convertToBase(value, 10, base);
      onChange(base10Val);
    }
  }

  render() {
    const { base, value } = this.props;
    return (
      <input
        value={convertToBase(value, base, 10)}
        onChange={(event) => this.handleChange(event, base)}
      ></input>
    );
  }
}

export default Input;
