import React, { useState } from "react";

import MainHeader from "./MainHeader";

import BackDrop from "./BackDrop";
import Drawer from "./Drawer";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const openNavHandler = () => {
    setOpenNavigation(true);
  };

  const closeNavHandler = () => {
    setOpenNavigation(false);
  };

  return (
    <MainHeader>
      {openNavigation && <BackDrop onClick={closeNavHandler}></BackDrop>}
      {/* {openNavigation &&} */}
      <Drawer onClick={openNavHandler}>
        <nav>
          <NavLinks></NavLinks>
        </nav>
      </Drawer>
      <div></div>
      <h1>YourPlaces</h1>

      <NavLinks></NavLinks>
    </MainHeader>
  );
};

export default Navigation;
