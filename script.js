function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typeData = new Typed(".role", {
  strings: [
    "Software Engineer",
    "Frontend Developer",
    "Web Designer",
    "Full-time Learner",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});
