import { Router } from "@reach/router";
import React from "react";
import Home from '../home/home'
import About from '../about/about'

import { LinkWrapper, Logo, StyledLink, Wrapper } from "./desktop.styled";

const DesktopNav = () => {
  return (
    <div>
        <Wrapper >
        <Logo>LOGO</Logo>
          <LinkWrapper>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/about">Services</StyledLink>
              <StyledLink to="/about">Contact</StyledLink>
          </LinkWrapper>
        </Wrapper>
        <Router>
            <Home path="/"/>
            <About path="/about"/>
        </Router>
    </div>
  );
};

export default DesktopNav;
