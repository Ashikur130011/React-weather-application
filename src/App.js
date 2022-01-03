import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import City from "./Pages/City";
import WeatherInfo from "./Pages/WeatherInfo";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px 10px;
  margin: auto;
  margin-top: 40px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px 2px #555;
  background: linear-gradient(to bottom, #ff7e5f 0%, #feb47b 100%);
`;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 30px;
  font-weight: bold;
`;


function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const Weather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f5e55468bf90edb17940ece9daae8fa`
    );
    setWeather(response.data);
    console.log(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherInfo weather={weather} city={city} />
      ) : (
        
        <City setCity={setCity} Weather={Weather} />
      )}
    </Container>
  );
}

export default App;
