(function () {
  "use strict";

  // --- Mobile nav toggle ---
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
      document.body.style.overflow = navLinks.classList.contains("open")
        ? "hidden"
        : "";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // --- Scroll reveal ---
  const revealEls = document.querySelectorAll(
    ".section-title, .about-content, .edu-card, .exp-card, .project-card, .skills-text, .cert-list, .contact-text, .contact-links"
  );
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // --- Education expand/collapse ---
  document.querySelectorAll("[data-edu]").forEach(function (card) {
    var header = card.querySelector(".edu-card-header");
    var body = card.querySelector(".edu-card-body");
    if (!header || !body) return;
    header.addEventListener("click", function () {
      var isOpen = card.classList.toggle("is-open");
      header.setAttribute("aria-expanded", isOpen);
      body.hidden = !isOpen;
    });
  });
})();
