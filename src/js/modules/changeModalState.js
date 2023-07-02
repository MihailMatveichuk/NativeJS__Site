import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windoForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElement(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElement("click", windoForm, "form");
  bindActionToElement("input", windowWidth, "width");
  bindActionToElement("input", windowHeight, "height");
  bindActionToElement("change", windowType, "type");
  bindActionToElement("change", windowProfile, "profile");
};

export default changeModalState;

// if (elem.length > 1) {
//   state[prop] = i;
// } else {
//   state[prop] = item.value;
// }
// console.log(state);
