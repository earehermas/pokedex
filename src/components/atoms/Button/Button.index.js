import styled from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default Button;
