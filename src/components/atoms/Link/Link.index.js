import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Link = styled(routerLink)`
  color: ${(props) => (props.color ? props.color : "red")};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
    border: none;
    outline: 0;
  }
`;
export default Link;
