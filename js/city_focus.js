document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let city = params.get("name");

  if (!city || !window.weatherData) {
    console.error("Missing city or weatherData.");
    return;
  }

  const cityKey = city.toLowerCase().replace(/\s+/g, "_") + "_daily";
  const cityData = weatherData[cityKey];

  if (!cityData || !cityData.daily) {
    console.error("City data not found.");
    return;
  }

  const maxTemp = cityData.daily.temperature_2m_max?.[0] ?? "N/A";
  const minTemp = cityData.daily.temperature_2m_min?.[0] ?? "N/A";
  const windSpeed = cityData.daily.wind_speed_10m_max?.[0] ?? "N/A";
  const humidity = cityData.daily.relative_humidity_2m_max?.[0] ?? "N/A";

  const cityTitle = document.getElementById("page-heading");
  if (cityTitle) {
    cityTitle.textContent = city;
  }

  const main = document.getElementById("city-focus-card");
  if (!main) {
    console.error("Missing container with id 'city-focus-card'");
    return;
  }

  const weatherIcon = getRandomWeatherImage(); // your helper function

  main.innerHTML = `
    <div class="card has-text-centered">
      <header class="card-header">
        <p class="card-header-title is-size-4">${city}</p>
      </header>
      <div class="card-image">
        <figure class="image is-64x64 mt-3">
          <i class="${weatherIcon} fa-3x"></i>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p><strong>Max Temperature:</strong> ${maxTemp}°C</p>
          <p><strong>Min Temperature:</strong> ${minTemp}°C</p>
          <p><strong>Wind Speed:</strong> ${windSpeed} km/h</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
        </div>
      </div>
    </div>
  `;

  // --- 7-day summary section ---
  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    61: "Light rain",
    71: "Light snow",
    95: "Thunderstorm",
    // Add more as needed
  };

  const container = document.getElementById("sevenDaySummary");
  if (!container) {
    console.warn("No element with ID 'sevenDaySummary' found.");
    return;
  }

  container.innerHTML = ""; // clear previous content

  const now = dayjs();

  for (let i = 0; i < cityData.daily.weather_code.length; i++) {
    const code = cityData.daily.weather_code[i];
    const desc = weatherDescriptions[code] || `Code ${code}`;
    const dayName =
      i === 0
        ? "Today"
        : i === 1
        ? "Tomorrow"
        : now.add(i, "day").format("dddd");

    const col = document.createElement("div");
    col.className = "column is-one-fifth";

    col.innerHTML = `
      <div class="card has-text-centered">
        <div class="card-content">
          <p class="title is-6">${dayName}</p>
          <p class="subtitle is-7">${desc}</p>
          <p>Max: ${cityData.daily.temperature_2m_max[i]}°C</p>
          <p>Min: ${cityData.daily.temperature_2m_min[i]}°C</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  }
});
