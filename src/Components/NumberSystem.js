import React, { Component } from "react";
import Input from "./Input";

const convertToBase = (numToConvert, baseToConvert, currentBase) => {
  let baseNum = [];
  let newNum = 0;
  while (numToConvert > 0) {
    baseNum.push(numToConvert % baseToConvert);
    numToConvert = parseInt(numToConvert / baseToConvert);
  }
  baseNum.forEach((num, idx) => (newNum += num * Math.pow(currentBase, idx)));
  return newNum;
};

const changeToBases = (bases, value, currentBase) => {
  const valToConvert = convertToBase(value, 10, currentBase);
  const newBaseValues = {};
  for (const base in bases) {
    newBaseValues[base] = convertToBase(valToConvert, base, 10);
  }
  return newBaseValues;
};

class NumberSystems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberSystems: {
        2: 0,
        8: 0,
        16: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, currentBase) {
    const { numberSystems } = this.state;
    const newValues = changeToBases(numberSystems, value, currentBase);
    this.setState((prevState) => ({
      numberSystems: Object.assign(prevState.numberSystems, newValues),
    }));
  }

  render() {
    const { inputValidation } = this.props;
    const numberSystems = Object.entries(this.state.numberSystems);
    return numberSystems.map(([base, value], index) => (
      <div style={{ margin: "1rem" }} key={index}>
        <label style={{ fontWeight: 900 }}>Base {base} : </label>
        <Input
          onChange={this.handleChange}
          value={value}
          base={base}
          inputValidation={inputValidation[base]}
        />
      </div>
    ));
  }
}

export default NumberSystems;
