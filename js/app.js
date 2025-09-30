
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  

  
  const nav = document.querySelector(".navigation");
  const footer = document.querySelector(".footer");
  const insertTarget =
    document.querySelector(".nav-right") ||
    document.querySelector(".nav-left") ||
    document.querySelector(".navigation");

  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "btn theme-toggle";
  toggleBtn.setAttribute("aria-pressed", "false");

  
  if (insertTarget) insertTarget.appendChild(toggleBtn);

  function updateToggleText(isDark) {
    if (!toggleBtn) return;
    toggleBtn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    toggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      if (nav) nav.classList.add("dark-mode");
      if (footer) footer.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      if (nav) nav.classList.remove("dark-mode");
      if (footer) footer.classList.remove("dark-mode");
    }
    updateToggleText(isDark);
    try {
      localStorage.setItem("iblog-theme", isDark ? "dark" : "light");
    } catch (err) {
      
    }
  }

  
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("iblog-theme");
  } catch (e) {
    savedTheme = null;
  }
  setTheme(savedTheme === "dark");

  toggleBtn.addEventListener("click", function () {
    const isDarkNow = document.body.classList.contains("dark-mode");
    setTheme(!isDarkNow);
  });

  
  const topBtn = document.createElement("button");
  topBtn.type = "button";
  topBtn.className = "back-to-top btn";
  topBtn.title = "Back to top";
  topBtn.setAttribute("aria-label", "Back to top");
  topBtn.innerHTML = "⬆";

  document.body.appendChild(topBtn);

  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  
  topBtn.addEventListener("keyup", function (e) {
    if (e.key === "Enter") window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
