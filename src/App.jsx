import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { SearchResult } from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedData, setSelectedData] = useState("all");

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
        setFilteredData(json);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFood();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data.filter((value) =>
      value.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedData("all");
      return;
    }
    const filter = data.filter((value) =>
      value.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedData(type);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
    {
      name: "Midnight Snacks",
      type: "midnight",
    },
  ];
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  //   {
  //     "name": "Boiled Egg",
  //     "price": 10,
  //     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     "image": "/images/egg.png",
  //     "type": "breakfast"
  // }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/public/images/Foodyzone.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtn.map((value) => (
            <Button
              isSelected={selectedData === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
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

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14px;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  border-radius: 5px;
  background: ${({ isSelected }) => (isSelected ? "#da0a0a" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  padding: 6px 12px;

  gap: 10px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: "#ff4343";
  }
`;
