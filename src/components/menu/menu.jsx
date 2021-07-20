import React from "react";
import { Router, Link } from "@reach/router";
import { StyledMenu } from "./menu.styled";
import Home from "../home/home";
import About from "../about/about";

const Menu = ({ open, setOpen }) => {

  return (
    <div>
      <StyledMenu open={open} onClick={() => setOpen(false) }>
        <Link to="/">
          Home
        </Link>
        <Link to="/about" >About</Link>
        <Link to="/about" >Services</Link>
        <Link to="/about" >Contact</Link>
      </StyledMenu>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
};

export default Menu;
