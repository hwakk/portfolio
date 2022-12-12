"use strict";

const navLogo = document.querySelector(".nav_logo");
const navToggle = document.querySelector(".nav_toggle");
const navCircle = navToggle.querySelector(".nav_circle");
const navBar = Array.from(navToggle.querySelectorAll("span"));
// navToggle.querySelectorAll("span") : NodeList(2) [span, span]

// 스크롤 내려가면 header 색상 변경
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navLogo.classList.add("nav_dark");
    navCircle.classList.add("nav_dark");
    navBar.map((item) => item.classList.add("nav_dark"));
  } else {
    navLogo.classList.remove("nav_dark");
    navCircle.classList.remove("nav_dark");
    navBar.map((item) => item.classList.remove("nav_dark"));
  }
});
