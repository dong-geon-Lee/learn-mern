import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const UserList = ({ datas }) => {
  console.log(datas);

  return (
    <ListWrapper>
      {datas.map((data) => (
        <UserItem key={data.id} {...data}></UserItem>
      ))}
    </ListWrapper>
  );
};

export default UserList;
