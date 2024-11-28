document.getElementById("calculate-btn").addEventListener("click", function () {
  const selectedCycles = document.getElementById("cycle-slider").value;

  // Calculate result percentage dynamically
  const percentage = Math.min(50 + selectedCycles * 3, 99); // Sample calculation

  // Redirect to the result page with query parameters
  window.location.href = `result.html?percentage=${percentage}&cycles=${selectedCycles}`;
});
