import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;

  & li {
    margin-left: 1rem;

    &:last-child a {
      color: red;
      background-color: yellow;
      padding: 0.6rem 0.8rem;
    }
  }

  & a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavLinks = () => {
  return (
    <NavWrapper>
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </NavWrapper>
  );
};

export default NavLinks;
