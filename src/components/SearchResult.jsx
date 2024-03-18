// import React from 'react'
import styled from "styled-components";
import { BASE_URL, Container } from "../App";
import { Button } from "../App";

export const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <Container>
        <FoodCards>
          {data.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <div className="price">
                  <Button>${price.toFixed(2)}</Button>
                </div>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodContainer>
  );
};
const FoodContainer = styled.section`
  background-image: url("/public/images/bg (1).png");
  background-size: cover;
  min-height: calc(100vh - 200px);
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  row-gap: 32px;
  column-gap: 20px;
  align-items: center;
`;
const FoodCard = styled.div`
  border: 0.66px solid;

  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    );

  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
  background: url(".png");

  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13px);

  border-radius: 20px;
  width: 340px;
  height: 167px;
  display: flex;
  padding: 8px;
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: end;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 8px;
  }
  p {
    font-size: 12px;
  }
  .info {
    gap: 8px;
  }
  .price {
    margin-right: 9px;
    font-size: 12px;
  }
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
`;
