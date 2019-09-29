import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpButtonContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
