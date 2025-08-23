document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(
    ".android-wrapper, .booking-wrapper, .no-stopping-wrapper, .element-hour-service-wrapper, .responsive-wrapper"
  );

  // Початковий стан: приховані за лівим краєм
  wrappers.forEach(wrapper => {
    wrapper.style.position = "relative";
    wrapper.style.width = "0px";  // стрічка ще не розгорнулась
    wrapper.style.opacity = 0;
    wrapper.style.overflow = "hidden"; // приховати картинку поки стрічка не виїхала
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    wrappers.forEach((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const start = elementTop - windowHeight * 0.8;
      const end = elementTop + windowHeight * 0.2;

      if (scrollY >= start && scrollY <= end) {
        const progress = (scrollY - start) / (end - start);

        // довжина стрічки від 0 до 150px
        const width = 150 * progress;
        wrapper.style.width = `${width}px`;
        wrapper.style.opacity = progress;

        // картинка рухається разом з початком стрічки
        const img = wrapper.querySelector(".img");
        if (img) img.style.transform = `translateX(${width - 24}px)`; 
        // 24px — ширина картинки, щоб вона завжди була на початку стрічки

      } else if (scrollY < start) {
        wrapper.style.width = "0px";
        wrapper.style.opacity = 0;
        const img = wrapper.querySelector(".img");
        if (img) img.style.transform = "translateX(0)";
      } else if (scrollY > end) {
        wrapper.style.width = "150px";
        wrapper.style.opacity = 1;
        const img = wrapper.querySelector(".img");
        if (img) img.style.transform = "translateX(150 - 24px)";
      }
    });
  });
});
