import { Link } from "@reach/router";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(234, 12%, 34%);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  padding: 30px;

  @media (max-width: 600px) {
    display: none;
  }
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
export const LinkWrapper = styled.div`
  //  margin: 0 auto;
`