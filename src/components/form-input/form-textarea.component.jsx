import React from "react";

import {
  FormInputLabel,
  GroupContainer,
  FormInputContainer
} from "./form-input.styles";

const FormTextArea = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer as="textarea" onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormTextArea;
