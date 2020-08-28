import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, base) {
    const { onChange, inputValidation } = this.props;
    const value = event.target.value;
    if (inputValidation.test(value)) {
      const base10Val = parseInt(value, base) || 0;
      onChange(base10Val);
    }
  }

  render() {
    const { base, value } = this.props;
    return (
      <input
        value={value.toString(base)}
        onChange={(event) => this.handleChange(event, base)}
      ></input>
    );
  }
}

export default Input;
