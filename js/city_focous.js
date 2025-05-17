document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const cityName = params.get("name");
  const container = document.getElementById("city-details");

  if (!window.weatherData || !weatherData.cities) {
    container.innerHTML = "<p class='has-text-danger'>Weather data not available.</p>";
    return;
  }

  const city = weatherData.cities.find(c => c.name.toLowerCase() === cityName?.toLowerCase());

  if (!city) {
    container.innerHTML = `<p class="has-text-danger">City "${cityName}" not found.</p>`;
    return;
  }

  container.innerHTML = `
    <h1 class="title is-3">${city.name}</h1>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p><strong>Max Temperature:</strong> ${city.maxTemperature}°C</p>
          <p><strong>Min Temperature:</strong> ${city.minTemperature}°C</p>
          <p><em>More detailed data could go here (like humidity, wind, etc.)</em></p>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <a href="index.html" class="button is-link is-light">← Back to main</a>
    </div>
  `;
});
