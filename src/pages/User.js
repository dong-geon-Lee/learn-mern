import React from "react";
import { USERS } from "../data/userData";
import UserList from "./UserList";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #eee;
  height: 92.5vh;
`;

const User = () => {
  return (
    <Wrapper>
      <UserList datas={USERS}></UserList>
    </Wrapper>
  );
};

export default User;
