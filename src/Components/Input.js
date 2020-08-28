import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, base) {
    const { onChange, inputValidation } = this.props;
    const value = +event.target.value;
    if (inputValidation.test(value)) {
      onChange(value, base);
    }
  }

  render() {
    const { base, value } = this.props;
    return (
      <input
        value={value}
        onChange={(event) => this.handleChange(event, base)}
      ></input>
    );
  }
}

export default Input;
