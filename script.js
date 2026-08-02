const themeBtn = document.querySelector("#themeBtn");
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");
const themeIcon = themeBtn.querySelector("i");
const menuIcon = menuBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
});
