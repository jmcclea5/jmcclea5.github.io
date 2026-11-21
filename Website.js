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
    // Hover-to-play videos: cover photo shows until hover (or tap on phones)
  document.querySelectorAll(".hover-video").forEach(function (fig) {
    var video = fig.querySelector("video");
    var lastPointer = "mouse";
    function play() {
      video.play().then(function () { fig.classList.add("playing"); }).catch(function () {});
    }
    function stop() {
      fig.classList.remove("playing");
      video.pause();
      video.currentTime = 0;
    }
    fig.addEventListener("pointerdown", function (e) { lastPointer = e.pointerType; });
    fig.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") play(); });
    fig.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") stop(); });
    fig.addEventListener("click", function () {
      if (lastPointer === "mouse") return;
      fig.classList.contains("playing") ? stop() : play();
    });
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
