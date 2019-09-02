import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            label="Display Name"
            value={this.state.displayName}
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
