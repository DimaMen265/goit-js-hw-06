const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

decrement.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
});
