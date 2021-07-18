import React, { useState } from "react";
import Burger from "../burger/burger";
import Menu from '../menu/menu'


const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <>
     
     <div>
       <Burger open={open} setOpen={setOpen}/>
       <Menu open={open} setOpen={setOpen}/>
     </div>
    
    </>
  );
};

export default Navbar;
