const table = document.querySelectorAll("#timetable > div");

const slideInOptions = {
  rootMargin: "0px 0px -150px 0px",
};

const slideInScroll = new IntersectionObserver((entries, slideInScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-in");
      slideInScroll.unobserve(entry.target);
    }
  });
}, slideInOptions);

table.forEach((table) => {
  slideInScroll.observe(table);
});
