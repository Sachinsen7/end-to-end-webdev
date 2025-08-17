document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector(".city-input");
  const weatherBtn = document.querySelector(".get-weather-btn");
  const weatherInfo = document.querySelector("#weather-data");
  const temperatureData = document.querySelector(".temperature-data");
  const descriptionData = document.querySelector(".description-data");
  const showError = document.querySelector(".showErrorMsg");
  const cityDisplayData = document.querySelector(".city-name");

  API_KEY = "7585ec870b0201e985159cbe2d2ad494";

  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/database is always in another Continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showErrorData();
    }
  });

  //  https://api.openweathermap.org/dat/2.5/weather?q=${city}&units=metric&appid=${API_KEYY}

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
    cityDisplayData.textContent = name;
    temperatureData.textContent = `Temperature: ${main.temp}`;
    descriptionData.textContent = `Weather : ${weather[0].description}`;

    //unlock the display

    weatherInfo.classList.remove("hidden");
    showError.classList.add("hidden");
  }

  function showErrorData() {
    weatherInfo.classList.remove("hidden");
    showError.classList.add("hidden");
  }
});
