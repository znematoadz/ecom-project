import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const ContactTitle = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

export const ContactButtonContainer = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
