function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// dynamic text
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

// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

// contact form configuration
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shivaniraichandani5@gmail.com",
    Password: "17F37D9533A044C91E6426CD639D3B9D8AA3",
    To: "shivaniraichandani5@gmail.com",
    From: "shivaniraichandani5@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
