import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  background-color: burlywood;
  width: 24rem;
  height: 6rem;
  margin: 2rem 0 1rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1rem;

  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  & section {
    display: flex;
    align-items: center;

    & div {
      margin: 0 1rem;
      font-size: 1.4rem;

      & p:nth-child(1) {
        color: yellow;
        font-weight: bold;
      }

      & p:nth-child(2) {
        color: green;
      }
    }
  }
`;

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <ItemWrapper>
      <section>
        <img src={image} alt={id}></img>
        <div>
          <p>{name}</p>
          <p>{placeCount > 1 ? "places" : "place"}</p>
        </div>
      </section>
    </ItemWrapper>
  );
};

export default UserItem;
