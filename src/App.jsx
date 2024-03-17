import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/public/images/Foodyzone.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Dinner</Button>
        <Button>Lunch</Button>
      </FilterContainer>

      <FoodContainer>
        <FoodCard></FoodCard>
      </FoodContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  .search {
    input {
      background-color: #323334;
      color: white;
      border: 1px solid red;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 400;

      &::placeholder {
        color: white;
      }
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14px;
`;
const Button = styled.button`
  border-radius: 5px;
  padding: 6px 12px;
  background: #ff4343;
  gap: 10px;
  border: none;
  color: white;
`;
const FoodContainer = styled.section`
  background-image: "/public/images/bg.png";
`;
const FoodCard = styled.div``;
