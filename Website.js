// Website.js
function toggleNav() {
  document.getElementById("nav").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  // Close the mobile menu after a link is tapped
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("nav").classList.remove("open");
    });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
