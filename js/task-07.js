const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
    const fontSizeValue = fontSizeControl.value + "px";
    text.style.fontSize = fontSizeValue;
})
