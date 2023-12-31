function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
boxes.style.display = "flex";
boxes.style.alignItems = "end";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "4px";

let size = 30;

const createBoxes = amount => {
  amount = parseInt(input.value, 10);

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    boxes.appendChild(box);
    size += 10;
  };
};

buttonCreate.addEventListener("click", createBoxes);

const destroyBoxes = () => {
  boxes.innerHTML = "";
  size = 30;
};

buttonDestroy.addEventListener("click", destroyBoxes);
