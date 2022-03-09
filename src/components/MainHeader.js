import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;
  position: relative;

  & h1 {
    text-align: left;
  }

  & div {
    display: none;
  }

  @media (max-width: 800px) {
    & div {
      width: 3.5rem;
      height: 0.25rem;
      background-color: #fff;
      transform: translate(0, -100%);
      margin-bottom: 1rem;
      cursor: pointer;
      display: flex;
    }

    & div::before {
      content: "";
      width: 3.5rem;
      height: 0.25rem;
      position: absolute;
      transform: translate(0, -200%);
      background-color: #fff;
      margin-top: 1.2rem;
      cursor: pointer;
    }

    & div::after {
      content: "";
      width: 3.5rem;
      height: 0.25rem;
      position: absolute;
      transform: translate(0, 100%);
      background-color: #fff;
      margin-top: 1.2rem;
      cursor: pointer;
    }
  }
`;

const MainHeader = (props) => {
  return <HeaderWrapper>{props.children}</HeaderWrapper>;
};

export default MainHeader;
