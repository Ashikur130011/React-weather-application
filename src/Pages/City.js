import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  margin: 30px;
  border: green solid 1px;
  border-radius: 5px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
  }
  & button {
    background-color: green;
    font-size: 14px;
    padding: 10px;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
const CityLabel = styled.span`
  color: green;
  margin: 10px auto;
  font-size: 22px;
  font-weight: bold;
`;
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const City = (props) => {
  const { setCity, Weather } = props;
  return (
    <>
      <WeatherLogo src={"icons/perfect-day.svg"} />
      <CityLabel>Find Weather of your city</CityLabel>
      <SearchBox onSubmit={Weather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city..."
          required
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default City;
