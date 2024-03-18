// import React from 'react'
import styled from "styled-components";

export const SearchResult = () => {
  return (
    <FoodContainer>
      <FoodCard></FoodCard>
    </FoodContainer>
  );
};
const FoodContainer = styled.section`
  background-image: url("/public/images/bg (1).png");
  background-size: cover;
  min-height: calc(100vh - 200px);
`;
const FoodCard = styled.div``;
