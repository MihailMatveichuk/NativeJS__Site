const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((element) => {
      element.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
      item.style.cursor = "pointer";
    });
  };

  const showTabContent = (i = 0) => {
    const animations = ["animate__animated", "animate__fadeIn"];
    content[i].style.display = display;
    content[i].classList.add(...animations);
    tab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
