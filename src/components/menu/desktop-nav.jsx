import { Router } from "@reach/router";
import React from "react";
import Home from '../home/home'
import About from '../about/about'

import { Logo, StyledLink, Wrapper } from "./desktop.styled";

const DesktopNav = ({open}) => {
  return (
    <div>
        <Wrapper open={open}>
        <Logo>LOGO</Logo>
          <div>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/about">Services</StyledLink>
              <StyledLink to="/about">Contact</StyledLink>
          </div>
        </Wrapper>
        <Router>
            <Home path="/"/>
            <About path="/about"/>
        </Router>
    </div>
  );
};

export default DesktopNav;
