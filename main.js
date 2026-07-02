// Reveal-on-scroll + small niceties, shared across pages.
(function () {
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // Stagger cards slightly
  document.querySelectorAll(".cards .card").forEach(function (card, i) {
    card.style.transitionDelay = (i % 2) * 90 + "ms";
  });
})();
