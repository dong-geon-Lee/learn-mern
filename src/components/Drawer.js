import React from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";

// const Wrapper = styled.div``;
import "./Drawer.css";

const Drawer = (props) => {
  return ReactDOM.createPortal(
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>,
    document.getElementById("drawer-hook")
  );
};

export default Drawer;
