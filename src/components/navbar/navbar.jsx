import React, { useState, useEffect, useRef } from "react";
import Burger from "../burger/burger";
import Menu from "../menu/menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  // function to close nav if user click outside of nav with useRef
  useEffect(() => {
    if (node.current) {
      document.addEventListener("click", (event) => {
        if (node.current.contains(event.target)) {
          return;
        }

        setOpen(false);
      });
    }
  }, []);

  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Navbar;
