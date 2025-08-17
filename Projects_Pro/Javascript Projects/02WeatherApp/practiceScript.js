document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector(".city-input");
  const weatherBtn = document.querySelector(".get-weather-btn");
  const weatherInfo = document.querySelector("#weather-data");
  const cityInfo = document.querySelector(".city-name");
  const temperatureInfo = document.querySelector(".temperature-data");
  const descriptionInfo = document.querySelector(".description-data");
  const showErrorMsg = document.querySelector("#showErrorMsg");

  const API_KEY = "7585ec870b0201e985159cbe2d2ad494";

  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const data = await fetchWeatherData(city);
      displayWeatherData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      showWeatherError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    if (!response.ok) {
      throw new Error("City Not Found");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);

    const { name, main, weather } = data;
    cityInfo.textContent = name;
    temperatureInfo.textContent = `Temperature: ${main.temp}°C`;
    descriptionInfo.textContent = `Weather ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    showErrorMsg.classList.add("hidden");
  }

  function showWeatherError() {
    weatherInfo.classList.add("hidden");
    showErrorMsg.classList.remove("hidden");
  }
});
