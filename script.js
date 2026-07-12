const search = document.querySelector("input");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Card animation
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Button click
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Tool page coming in Day 3 🚀");
  });
});

// Smooth page load
window.onload = () => {
  document.body.style.opacity = "1";
};
