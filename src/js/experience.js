const swipeTargets = [
  { selector: ".wrap-line-one", direction: "right" },
  { selector: ".wrap-line-two", direction: "left" },   // другий стартує справа
  { selector: ".wrap-line-three", direction: "right" },
  { selector: ".wrap-line-four", direction: "left" },  // четвертий стартує справа
  { selector: ".wrap-line-five", direction: "right" },
];

window.addEventListener("scroll", () => {
  swipeTargets.forEach(({ selector, direction }) => {
    const line = document.querySelector(selector); // кольоровий блок (.line)
    if (!line) return;

    const icon = line.tagName === "IMG" ? line : line.querySelector("img");
    if (!icon) return;

    const rect = line.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      // Прогрес появи від 0 → 1
      const progress =
        1 -
        Math.abs(rect.top + rect.height / 2 - windowHeight / 2) /
          (windowHeight / 2);

      // обмежуємо рух шириною лінії (150px мінус ширина картинки)
      const containerWidth = 100;
      const iconWidth = icon.offsetWidth;
      const maxShift = containerWidth - iconWidth;

      let shift;
      if (direction === "right") {
        // рух зліва → вправо
        shift = progress * maxShift;
      } else {
        // рух справа → вліво
        shift = -progress * maxShift;
      }

      icon.style.transform = `translateX(${shift}px)`;
      icon.style.transition = "transform 0.1s linear";
    }
  });
});
