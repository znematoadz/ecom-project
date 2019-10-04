import React from "react";

import FormTextArea from "../../components/form-input/form-textarea.component";
import FormInput from "../../components/form-input/form-input.component";
import {
  ContactContainer,
  ContactButtonContainer,
  ContactTitle
} from "./contact.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <form
          className="contact-form"
          onSubmit={this.handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <FormInput
            name="name"
            type="text"
            label="Name"
            value={name}
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormTextArea
            name="message"
            type="textarea"
            label="Message"
            value={message}
            onChange={this.handleChange}
            required
          />
          <ContactButtonContainer>
            <CustomButton type="submit">Submit</CustomButton>
          </ContactButtonContainer>
        </form>
      </ContactContainer>
    );
  }
}

export default ContactPage;
