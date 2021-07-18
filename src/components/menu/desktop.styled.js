import { Link } from "@reach/router";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(234, 12%, 34%);
  height: 70px;
  display: flex;
  visible: ${props => (props.isOpen ? "visible" : "hidden")};
  align-items: center;
  justify-content: space-around;
`;
export const StyledLink = styled(Link)`
    margin: 1rem;
   color: white;
   text-decoration: none;
   font-size: 1.5rem;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    color: white;
`