import React, { Component } from "react";
import Input from "./Input";
class NumberSystems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState((prevState) => ({
      number: value,
    }));
  }

  render() {
    const { inputValidation, bases } = this.props;
    return bases.map((base, index) => (
      <div style={{ margin: "1rem" }} key={index}>
        <label style={{ fontWeight: 900 }}>Base {base} : </label>
        <Input
          onChange={this.handleChange}
          value={this.state.number}
          base={base}
          inputValidation={inputValidation[base]}
        />
      </div>
    ));
  }
}

export default NumberSystems;
