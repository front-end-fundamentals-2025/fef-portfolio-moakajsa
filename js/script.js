const switches = document.getElementById("switch");
const bodyElement = document.querySelector("body");
// const logoElement = document.getElementById("logo");

// lightMode.addEventListener("click", function (event) {
//   bodyElement.style.background = "#222222";
//   bodyElement.style.color = "#a9a9a9";
//   logoElement.style.color = "#a9a9a9";
// });

switches.addEventListener("click", function (event) {
  bodyElement.classList.toggle("dark-mode");
});
