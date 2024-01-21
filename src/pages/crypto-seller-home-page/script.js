const hamburgerBtn = document.querySelector(".show-nav");
const dropdownNav = document.querySelector(".dropdown-nav")

hamburgerBtn.addEventListener("click", () => {
  dropdownNav.classList.toggle("hidden");
});

