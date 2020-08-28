import React, { Component } from "react";
const convertToBase = (numToConvert, baseToConvert, prevBase) => {
  let baseNum = [];
  let newNum = 0;
  while (numToConvert > 0) {
    baseNum.push(numToConvert % baseToConvert);
    numToConvert = parseInt(numToConvert / baseToConvert);
  }
  baseNum.forEach((num, idx) => (newNum += num * Math.pow(prevBase, idx)));
  return newNum;
};

const changeToBases = (bases, value, prevBase) => {
  const valToConvert = convertToBase(value, 10, prevBase);
  const newBaseValues = {};
  for (const base in bases) {
    if (base !== prevBase) {
      newBaseValues[base] = convertToBase(valToConvert, base, 10);
    }
  }
  newBaseValues[prevBase] = value;
  console.log(newBaseValues);
  return newBaseValues;
};

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, base) {
    const value = event.target.value;
    console.log(this.props.validationConstrain.test(+value));
    if (this.props.validationConstrain.test(+value)) {
      this.props.onChange(value, base);
    }
  }

  render() {
    return (
      <div>
        <label style={{ fontWeight: 900 }}>Base {this.props.base}</label>
        <input
          value={this.props.value}
          onChange={(event) => this.handleChange(event, this.props.base)}
        ></input>
      </div>
    );
  }
}

const validationConstrains = {
  2: new RegExp("^[0-1]*$"),
  8: new RegExp("^[0-7]*$"),
  16: new RegExp("^[0-15]*$"),
};

class BaseSystem extends Component {
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
  handleChange(value, prevBase) {
    const newValues = changeToBases(this.state.numberSystems, value, prevBase);
    this.setState((prevState) => ({
      ...prevState,
      numberSystems: Object.assign(prevState.numberSystems, newValues),
    }));
  }
  render() {
    const { numberSystems } = this.state;
    return Object.entries(numberSystems).map(([base, value], index) => (
      <Base
        key={index}
        base={base}
        validationConstrain={validationConstrains[base]}
        value={value}
        onChange={this.handleChange}
      />
    ));
  }
}

export default BaseSystem;
