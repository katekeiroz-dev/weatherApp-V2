window.weatherApp = window.weatherApp || { components: {}, dataStore: {} };

// Image obj
window.weatherImg = {
  sun: "fa-solid fa-sun",
  cloudy: "fa-solid fa-cloud",
  rain: "fa-solid fa-cloud-showers-heavy",
  storm: "fa-solid fa-cloud-bolt"
};

// Random image picker
function getRandomWeatherImage() {
  const images = Object.values(window.weatherImg);
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("weather-cards");
  const cityKeys = [
    "amsterdam_daily", "berlin_daily", "cork_daily", "copenhagen_daily",
    "new_york_daily", "paris_daily", "san_francisco_daily", "tromso_daily", "waterford_daily"
  ];

  if (!window.weatherData) {
    console.error("Weather data not found.");
    return;
  }

  cityKeys.forEach(key => {
    const cityData = weatherData[key];
    if (!cityData || !cityData.daily) return;

    const cityName = key.replace("_daily", "").replace("_", " ").replace(/\b\w/g, c => c.toUpperCase());
    const maxTemp = cityData.daily.temperature_2m_max?.[0] ?? "N/A";
    const minTemp = cityData.daily.temperature_2m_min?.[0] ?? "N/A";

    const column = document.createElement("div");
    column.className = "column is-one-third";

    const card = document.createElement("div");
    card.className = "card has-text-centered is-clickable";
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.location.href = `/city/?name=${encodeURIComponent(cityName)}`;

    };

    //  Get a random image for each card
    const randomImg = getRandomWeatherImage();

    card.innerHTML = `
      <header class="card-header">
        <p class="card-header-title is-size-4 is-centered">${cityName}</p>
        <button class="card-header-icon">
          <span class="icon">
            <i id="fave-${cityName}" class="fa-regular fa-heart"></i>
          </span>
        </button>
      </header>
      <div class="card-image">
        <figure class="image"><br>
          <i class="${randomImg} fa-3x"></i>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p><strong>Max Temp:</strong> ${maxTemp}°C</p>
          <p><strong>Min Temp:</strong> ${minTemp}°C</p>
        </div>
      </div>
    `;

    column.appendChild(card);
    main.appendChild(column);
  });

  console.log("Weather data loaded:", weatherData);
});
