import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { SearchResult } from "./components/SearchResult";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFood();
  }, []);
  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  //   {
  //     "name": "Boilded Egg",
  //     "price": 10,
  //     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     "image": "/images/egg.png",
  //     "type": "breakfast"
  // }

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
      <SearchResult />
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
  padding-bottom: 30px;
`;
const Button = styled.button`
  border-radius: 5px;
  padding: 6px 12px;
  background: #ff4343;
  gap: 10px;
  border: none;
  color: white;
`;
