window.weatherApp = window.weatherApp || { components: {}, dataStore: {} };

// ICONS obj
window.weatherImg = {
  sun: "fa-solid fa-sun",
  cloudy: "fa-solid fa-cloud",
  rain: "fa-solid fa-cloud-showers-heavy",
  storm: "fa-solid fa-cloud-bolt"
};

// Random iICONS picker
function getRandomWeatherImage() {
  const images = Object.values(window.weatherImg);
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities")) || [];

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

const favoritesContainer = document.getElementById("favorite-cards");

cityKeys.forEach(key => {
  const cityData = weatherData[key];
  if (!cityData || !cityData.daily) return;

  const rawName = key.replace("_daily", "");
  const cityName = rawName.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase());
  const maxTemp = cityData.daily.temperature_2m_max?.[0] ?? "N/A";
  const minTemp = cityData.daily.temperature_2m_min?.[0] ?? "N/A";

  const isFavorite = favoriteCities.includes(cityName.replace(/\s/g, ""));

  const column = document.createElement("div");
  column.className = "column is-one-third";

  const card = document.createElement("div");
  card.className = `card has-text-centered is-clickable ${isFavorite ? 'has-background-warning-light' : ''}`;
  card.style.cursor = "pointer";
  card.onclick = () => {
    window.location.href = `/city/?name=${encodeURIComponent(cityName)}`;
  };

  const randomImg = getRandomWeatherImage();

  card.innerHTML = `
    <header class="card-header">
      <p class="card-header-title is-size-4 is-centered">${cityName}</p>
      <button class="card-header-icon">
        <span class="icon">
          <i id="fave-${cityName}" class="${isFavorite ? 'fa-solid fa-heart has-text-black' : 'fa-regular fa-heart'}"></i>
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
        <p><strong>+ Max Temp:</strong> ${maxTemp}°C</p>
        <p><strong>- Min Temp:</strong> ${minTemp}°C</p>
      </div>
    </div>
  `;

  column.appendChild(card);

  if (isFavorite) {
    favoritesContainer.appendChild(column);
  } else {
    main.appendChild(column);
  }
});

  console.log("Weather data loaded:", weatherData);
});
