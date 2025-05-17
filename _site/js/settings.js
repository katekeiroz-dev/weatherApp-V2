document.addEventListener("DOMContentLoaded", () => {
  const citiesForm = document.getElementById("cities-form");

  if (!citiesForm) return;

  const checkboxes = citiesForm.querySelectorAll("input[type='checkbox'][name='favoriteCities']");

  // Load saved favorites and check the boxes
  const savedFavorites = JSON.parse(localStorage.getItem("favoriteCities")) || [];

  checkboxes.forEach(checkbox => {
    if (savedFavorites.includes(checkbox.value)) {
      checkbox.checked = true;
    }
  });

  citiesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Save selected cities to localStorage
    const selected = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    localStorage.setItem("favoriteCities", JSON.stringify(selected));

    alert("Favorite cities saved!");
  });
});

// ✅ Now defined globally so it works with onclick
function resetFavoriteCities() {
  if (confirm("Are you sure you want to reset all favorite cities?")) {
    localStorage.removeItem("favoriteCities");

    // Optionally uncheck all checkboxes without reloading:
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='favoriteCities']");
    checkboxes.forEach(cb => cb.checked = false);

    // Now reload the page so the main dashboard reflects this
    location.reload();
  }
}
