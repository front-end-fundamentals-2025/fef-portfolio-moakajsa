const switches = document.getElementById("switch");
const bodyElement = document.querySelector("body");

// Check for saved preference
if (localStorage.getItem("theme") === "dark") {
  bodyElement.classList.add("dark-mode");
}

switches.addEventListener("click", function (event) {
  bodyElement.classList.toggle("dark-mode");

  // Save theme preference
  if (bodyElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  if (bodyElement.classList.contains("dark-mode")) {
    message.textContent = "Dark mode is active.";
  } else {
    message.textContent = "Light mode is active.";
  }
});
