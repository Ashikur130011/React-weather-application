import React from "react";
import Chart from "react-google-charts";
import styled from "styled-components";
import { WeatherIcons } from "../App";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};
const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 18px;
  & span {
    font-size: 45px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-align: center;
  width: 90%;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid #4ca1af;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
`;
const InfoIcon = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  background: linear-gradient(to bottom, #4ca1af 0%, #c4e0e5 100%);
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  
  margin: 15px;
  & span {
    font-size: 14px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherInfo = (props) => {
     const { weather } = props;
     const isDay = weather?.weather[0].icon?.includes("d");
     const getTime = (timeStamp) => {
       return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
         timeStamp * 1000
       ).getMinutes()}`;
     };

     const arrays=Object.entries(weather.main);
     const newArray = [["Task", "Hours per Day"], ...arrays];
     console.log(newArray);
// const data = [
//     // ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
//   ];
  const options = {
    title: "Current Weather Data",
    is3D: true,
    
    pieSliceText: "label",
  };
  return (
    <>
      <WeatherContainer>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </Condition>
        <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherContainer>
      <Location>
        Location: {`${weather?.name}, ${weather?.sys?.country}`}
      </Location>

      <WeatherInfoLabel>Today's Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </WeatherInfoContainer>

      <Chart
        style={{
          
        }}
        chartType="PieChart"
        data={newArray}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default WeatherInfo;
